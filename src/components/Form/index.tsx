import { ArrowLeft } from "phosphor-react-native";
import React, { useState } from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Button } from "../Button";
import { Screenshot } from "../Screenshot";
import { feedbackType } from "../WIdget";
import { captureScreen } from "react-native-view-shot";

import { styles } from "./styles";

interface Props {
  feedbackType: feedbackType;
}

export function Form({ feedbackType }: Props) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    })
      .then((uri) => setScreenshot(uri))
      .catch((error) => console.log(error));
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            color={theme.colors.text_primary}
            weight={"bold"}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image style={styles.image} source={feedbackTypeInfo.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder={
          "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        }
        placeholderTextColor={theme.colors.text_secondary}
        multiline
      />
      <View style={styles.footer}>
        <Screenshot
          onRemoveShot={handleScreenshotRemove}
          onTakeShot={handleScreenshot}
          screenshot={screenshot}
        />
        <Button isLoading={false} />
      </View>
    </View>
  );
}
