'use client';

import { topics } from '@/constants/topics';
import { useConversationData } from '@/context/conversationContext';
import { Box, Chip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import RangeSlider from '../rangeSlider/RangeSlider';
import TopicSelector from '../topicSelector/TopicSelector';

interface Topic {
  topic: string;
  titles: string[];
}

const ConversationTopic: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic>(topics[0]);
  const { conversationData, setConversationData } = useConversationData();

  useEffect(() => {
    setConversationData({ topic: topics[0].topic, title: '', words: 100 });
  }, []);

  return (
    <Box
      pb={{ xs: '166px', sm: '283px' }}
      bgcolor="#12111A"
      pl={{ xs: '20px', sm: '32px' }}
      pr={{ xs: '13px' }}
      pt={{ xs: '140px', sm: '173px' }}>
      <Box
        sx={{
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          borderBottomColor: '#3A3940',
        }}>
        <Typography
          fontSize={{ xs: '20px', sm: '24px' }}
          fontWeight="500"
          color="white">
          Content type
        </Typography>
        <Typography
          fontSize="16px"
          fontWeight="400"
          color="white"
          pb={{ xs: '20px', sm: '32px' }}>
          Choose a content type that best fits your needs.
        </Typography>
      </Box>
      <Typography
        fontSize={{ xs: '16px', sm: '18px' }}
        pt={{ xs: '24px', sm: '40px' }}
        fontWeight="500"
        color="white">
        What type of content are you creating?
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        mt={{ xs: '16px', sm: '24px' }}
        gap={{ xs: '0px', sm: '12px' }}>
        {topics.map((chip) => (
          <Chip
            key={chip.topic}
            onClick={() => {
              const filtered = topics.filter(
                (item) => item.topic === chip.topic,
              )[0];
              if (filtered) {
                setConversationData({
                  ...conversationData,
                  topic: filtered.topic,
                  title: '',
                });

                setSelectedTopic(filtered);
              }
            }}
            label={chip.topic}
            variant={
              selectedTopic?.topic === chip.topic ? 'filled' : 'outlined'
            }
            sx={{
              bgcolor: selectedTopic?.topic === chip.topic ? '#523FD7' : '',
              minHeight: '49px',
              borderRadius: '30px',
              py: '14px',
              px: '17px',
              minWidth: '81px',
              color: 'white',
              fontSize: '14px',
              m: { xs: '2px', sm: '0px' },
              '&:hover': {
                bgcolor: selectedTopic?.topic === chip.topic ? '#523FD7' : '',
              },
            }}
          />
        ))}
      </Box>
      <Typography
        fontSize={{ xs: '16px', sm: '18px' }}
        letterSpacing={{ xs: '-0.352px', sm: '-0.396px' }}
        pt="32px"
        fontWeight="500"
        color="white">
        Which type of “{selectedTopic.topic}” content do you want to create?
      </Typography>

      <TopicSelector selectedTopic={selectedTopic} />

      <Typography
        fontSize={{ xs: '16px', sm: '18px' }}
        letterSpacing={{ xs: '-0.352px', sm: '-0.396px' }}
        pb={{ xs: '30px', sm: '36px' }}
        pt="32px"
        fontWeight="500"
        color="white">
        Set the number of words for output text.
      </Typography>
      <RangeSlider />
    </Box>
  );
};
export default ConversationTopic;
