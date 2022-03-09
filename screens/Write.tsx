import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert } from "react-native";

const View = styled.View`
  background-color: ${colors.bgColor};
  flex: 1;
`;
const Title = styled.Text`
  color: ${colors.textColor};
  margin: 50px 0px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
`;
const TextInput = styled.TextInput`
  background-color: azure;
  border-radius: 30px;
  padding: 20px 20px;
  margin: 0 20px;
  max-height: 70%;
`;

const Btn = styled.TouchableOpacity`
  background-color: ${colors.btnColor};
  align-self: center;
  align-items: center;
  padding: 10px;
  width: 80%;
  margin-top: 20px;
  border-radius: 30px;
`;

const BtnText = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 700;
`;

const EmojiContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 20px;
  margin-bottom: 20px;
`;

const EmojiBtn = styled.TouchableOpacity<{ selected: boolean }>`
  background-color: white;
  margin: 5px;
  padding: 3px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
  border-radius: 15px;
  border-width: 3px;
  justify-content: center;
  align-items: center;
  border-color: ${(props) => (props.selected ? "black" : "transparent")};
`;

const EmojiText = styled.Text`
  font-size: 24px;
`;

const emojis: string[] = [
  "😍",
  "🤣",
  "😊",
  "🙏",
  "😭",
  "😘",
  "👍",
  "🔥",
  "💖",
  "😢",
  "🤔",
  "😆",
  "🙄",
  "💪",
];

const Write: React.FC<NativeStackScreenProps<any, "Write">> = ({
  navigation: { setOptions, goBack },
  route: { params },
}) => {
  const [feelings, setFeelings] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const onEmojiSelect = (emoji: string) => {
    setSelectedEmoji(emoji);
  };
  const onChangeText = (text: string) => {
    setFeelings(text);
  };
  const onSubmit = () => {
    if (feelings == "" || selectedEmoji == "") {
      return Alert.alert("Please Complete the Form");
    }
  };
  return (
    <View>
      <Title>How do you feel today?</Title>
      <EmojiContainer>
        {emojis.map((emoji, index) => (
          <EmojiBtn
            selected={emoji === selectedEmoji}
            onPress={() => onEmojiSelect(emoji)}
            key={index}
          >
            <EmojiText>{emoji}</EmojiText>
          </EmojiBtn>
        ))}
      </EmojiContainer>
      <TextInput
        returnKeyType="done"
        onSubmitEditing={onSubmit}
        value={feelings}
        multiline
        onChangeText={onChangeText}
        placeholder="Write!!! What ever you want"
      />
      <Btn activeOpacity={0.8}>
        <BtnText>Save </BtnText>
      </Btn>
    </View>
  );
};
export default Write;