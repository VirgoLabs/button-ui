import { Image, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/Button';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeScreen() {

  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light']
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.light.tint, dark: Colors.dark.tint }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-ui-lab-logo.png')}
          style={[styles.reactLogo, {
            tintColor: colors.text,
          }]}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to UI Lab!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Button Component usage */}
      <Button title='Hello world' onPress={() => console.log("Hello world")} />

      <ThemedText type='title'>Usecases of the Button</ThemedText>
      <ThemedText type='small'>Change Light/Dark theme to change button by theme</ThemedText>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>Title &nbsp;
          <ThemedText type='light' style={{ color: 'red' }}>required</ThemedText>
        </ThemedText>
        <ThemedText type='default'>string</ThemedText>
        <Button title="Submit" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>onPress</ThemedText>
        <ThemedText type='default'>function</ThemedText>
        <Button onPress={() => alert("Button Pressed!")} title="Press Me" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>disabled</ThemedText>
        <ThemedText type='default'>boolean</ThemedText>
        <Button disabled={true} title="Submit" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>loading</ThemedText>
        <ThemedText type='default'>boolean</ThemedText>
        <Button loading={true} title="Loading..." />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>loadingIndicatorColor</ThemedText>
        <ThemedText type='default'>string</ThemedText>
        <Button loading={true} loadingIndicatorColor="white" title="Loading..." />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>icon</ThemedText>
        <ThemedText type='default'>React Node (Icon component)</ThemedText>
        <Button icon={"checkmark-circle-outline"} title="Submit" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>iconPosition</ThemedText>
        <ThemedText type='default'>left | right</ThemedText>
        <Button icon={"checkmark-circle-outline"} iconPosition="right" title="Submit" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>style</ThemedText>
        <ThemedText type='default'>ViewStyle (Object)</ThemedText>
        <Button style={{ backgroundColor: 'blue', padding: 10 }} title="Styled Button" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>textStyle</ThemedText>
        <ThemedText type='default'>TextStyle (Object)</ThemedText>
        <Button textStyle={{ color: 'white', fontSize: 18 }} title="Styled Text" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>raised</ThemedText>
        <ThemedText type='default'>boolean</ThemedText>
        <Button raised={true} title="Raised Button" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>borderRadius</ThemedText>
        <ThemedText type='default'>number</ThemedText>
        <Button borderRadius={25} title="Rounded Button" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>borderWidth</ThemedText>
        <ThemedText type='default'>number</ThemedText>
        <Button borderWidth={5} title="Bordered Button" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>borderColor</ThemedText>
        <ThemedText type='default'>string</ThemedText>
        <Button borderColor="silver" borderWidth={2} title="Colored Border Button" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>activeOpacity</ThemedText>
        <ThemedText type='default'>number</ThemedText>
        <Button activeOpacity={0.5} title="Active Opacity Button" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>onLongPress</ThemedText>
        <ThemedText type='default'>function</ThemedText>
        <Button onLongPress={() => console.log("Long Pressed!")} title="Long Press Me" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>size</ThemedText>
        <ThemedText type='default'>small | medium | large</ThemedText>
        <Button size="large" title="Large Button" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>variant</ThemedText>
        <ThemedText type='default'>outlined | solid | ghost</ThemedText>
        <Button variant="outlined" title="Outlined Button" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>underlayColor</ThemedText>
        <ThemedText type='default'>string</ThemedText>
        <Button underlayColor="lightblue" title="Underlay Color Button" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type='subtitle'>testID</ThemedText>
        <ThemedText type='default'>string</ThemedText>
        <Button testID="submitButton" title="Submit" />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
