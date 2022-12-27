import { FlatList, Text, View } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';
import { useStore } from '@nanostores/react';
import { GoalType, deleteGoal, goalStore } from '../utils/stores';
import GoalItem from './GoalItem';

const StyledView = styled(View);
//const StyledScrollView = styled(ScrollView);
const StyledFlatList = styled(FlatList<GoalType>);
const StyledText = styled(Text);

const GoalList = () => {
  const goals = useStore(goalStore);
  return (
    <StyledView className="w-full flex-1">
      <StyledText className="mb-2 text-2xl font-bold text-white">
        List of Goals
      </StyledText>
      <StyledFlatList
        className="p-4"
        data={goals}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({ item }) => (
          <GoalItem
            title={item.title}
            onPress={() => {
              item.id && deleteGoal(item.id);
            }}
          />
          // <StyledView className="border-1 m-1 rounded bg-white p-2">
          //   <StyledText className="font-bold">{item.title}</StyledText>
          // </StyledView>
        )}
      />
      {/* <StyledScrollView className="bg-teal-400 p-4">
        {goals.map((goal, index) => (
          <StyledView
            key={`${goal.title}${index}`}
            className="border-1 m-1 rounded bg-white p-2"
          >
            <StyledText className="font-bold">{goal.title}</StyledText>
          </StyledView>
        ))}
      </StyledScrollView> */}
    </StyledView>
  );
};

export default GoalList;

// const styles = StyleSheet.create({});
