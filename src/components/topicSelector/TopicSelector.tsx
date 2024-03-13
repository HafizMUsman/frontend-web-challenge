import { useConversationData } from '@/context/conversationContext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Autocomplete, Box, Paper, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

interface ITopicSelectorProps {
  selectedTopic: {
    topic: string;
    titles: Array<string>;
  };
}

const TopicSelector: React.FC<ITopicSelectorProps> = (props) => {
  const { selectedTopic } = props;
  const { topic, titles } = selectedTopic;
  const [selectedTopicValue, setSelectedTopicValue] = useState<string | null>(
    null,
  );
  const { conversationData, setConversationData } = useConversationData();

  const handleTopicChange = (
    _event: React.ChangeEvent<{}>,
    value: string | null,
  ) => {
    setSelectedTopicValue(value);
    setConversationData({ ...conversationData, title: value as string });
  };

  useEffect(() => {
    setSelectedTopicValue(null);
  }, [topic]);

  return (
    <Autocomplete
      key={`${topic}${conversationData.topic}`}
      options={titles}
      value={selectedTopicValue}
      onChange={handleTopicChange}
      popupIcon={<ExpandMoreIcon sx={{ color: 'white' }} fontSize="medium" />}
      sx={{
        mt: { xs: '16px', sm: '24px' },
        width: { xs: '100%', sm: '517px' },
        bgcolor: 'rgba(58, 57, 64, 0.50)',
        borderRadius: '12px',
        '& .MuiOutlinedInput-input': {
          color: 'white',
        },
        border: 'none',
        color: 'white',
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '& .MuiAutocomplete-clearIndicator': {
          color: 'white',
        },
      }}
      noOptionsText={<div style={{ color: 'white' }}>No options</div>}
      componentsProps={{
        popper: {
          modifiers: [
            { name: 'flip', enabled: false },
            { name: 'preventOverflow', enabled: false },
          ],
        },
      }}
      PaperComponent={({ children }) => (
        <Paper
          sx={{
            my: '8px',
            bgcolor: 'rgba(58, 57, 64)',
            color: 'white',
          }}>
          {children}
        </Paper>
      )}
      renderInput={(params) => (
        <Box
          p={'1px'}
          borderRadius="12px"
          sx={{
            background: 'linear-gradient(to right, #523FD7 0%, #FF7DFF 100%)',
          }}>
          <TextField
            {...params}
            placeholder="Search"
            sx={{
              bgcolor: 'rgba(58, 57, 64)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: 'none',
              color: 'white',
            }}
          />
        </Box>
      )}
    />
  );
};

export default TopicSelector;
