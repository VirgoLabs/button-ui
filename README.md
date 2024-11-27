# Button UI

This is a customizable Button component for React Native that can be used in any project built with Expo or React Native. It provides several styling options, dynamic color support based on light or dark mode, loading states, and support for icons and various button types.

## Features:

-   Customizable size and padding.
-   Support for icons with adjustable position.
-   Loading state with spinner support.
-   Various button variants (`solid`, `outlined`, `ghost`).
-   Dynamic theming (light and dark mode).
-   Optional raised, border, and shadow effects.
-   Multiple customizable styles including `borderRadius`, `borderWidth`, and `borderColor`.
-   Press and long-press functionality with custom feedback.

## Installation

To use this Button component, make sure you have the following dependencies:

```bash
npm install react-native
npm install @expo/vector-icons
```

If you're using Expo, the `Ionicons` icon package should already be included. Otherwise, you can install it via:

```bash
npm install @expo/vector-icons
```

Copy Button Component code from the given project as well as copy the Colors.ts file.

Import the `Button` component into your project:

```tsx
import Button from "@/components/Button"; // Adjust path as needed
```

## Usage

Here’s a basic usage example:

```tsx
import React from "react";
import { View } from "react-native";
import Button from "@/components/Button";

const App = () => {
    function handlePressed() {
        alert("Button Pressed");
    }

    return (
        <View style={{ padding: 20 }}>
            <Button
                title="Submit"
                icon="checkmark"
                iconPosition="left"
                size="medium"
                variant="solid"
                raised={true}
                borderRadius={10}
                borderWidth={2}
                borderColor="green"
                underlayColor="#ccc"
                activeOpacity={0.8}
                testID="submitButton"
                onPress={handlePressed}
            />
        </View>
    );
};

export default App;
```

### Button Props

Here’s a list of all the props you can pass to the `Button` component:

| Prop                | Type                      | Default Value   | Description                                                                                  |
|---------------------|---------------------------|-----------------|----------------------------------------------------------------------------------------------|
| `title`             | `string`                  | None            | The text to display on the button.                                                           |
| `onPress`           | `(event) => void`         | None            | Function to be called when the button is pressed.                                            |
| `onLongPress`       | `(event) => void`         | None            | Function to be called when the button is long-pressed.                                        |
| `disabled`          | `boolean`                 | `false`         | If `true`, the button is disabled (non-interactive).                                          |
| `loading`           | `boolean`                 | `false`         | If `true`, a loading spinner is displayed instead of the button text.                         |
| `icon`              | `keyof Ionicons.glyphMap` | None            | Icon to display on the button, sourced from `Ionicons`.                                       |
| `iconPosition`      | `"left" \| "right"`         | `"left"`        | Position of the icon (`"left"` or `"right"`).                                                 |
| `style`             | `ViewStyle`               | None            | Custom styles for the button container.                                                      |
| `textStyle`         | `TextStyle`               | None            | Custom styles for the button text.                                                           |
| `loadingIndicatorColor` | `string`               | `"white"`       | Color of the loading spinner when the button is in the loading state.                        |
| `raised`            | `boolean`                 | `false`         | If `true`, adds a shadow and elevation to the button (i.e., a raised button effect).          |
| `borderRadius`      | `number`                  | `8`             | Border radius for the button corners.                                                        |
| `borderWidth`       | `number`                  | `0`             | Width of the button’s border.                                                                |
| `borderColor`       | `string`                  | None            | Color of the button’s border (if `borderWidth` is greater than 0).                           |
| `size`              | `"small" \| "medium" \| "large"` | `"medium"`      | The size of the button. Controls padding and overall size.                                    |
| `variant`           | `"outlined" \| "solid" \| "ghost"` | `"solid"`      | The style variant of the button: `outlined`, `solid`, or `ghost`.                             |
| `activeOpacity`     | `number`                  | `0.7`           | Opacity when the button is pressed (0 to 1).                                                  |
| `underlayColor`     | `string`                  | None            | Color for the button background when pressed.                                                 |
| `testID`            | `string`                  | None            | A unique ID for the button (useful for testing).                                              |

### Example Usage with All Props

```tsx
<Button
    title="Submit"
    onPress={() => alert("Form Submitted")}
    icon="checkmark"
    iconPosition="left"
    size="medium"
    variant="solid"
    raised={true}
    borderRadius={10}
    borderWidth={2}
    borderColor="green"
    underlayColor="#eee"
    activeOpacity={0.8}
    testID="submitButton"
/>
```

### Notes on Styling

-   **Size**: You can set the button size by choosing one of the predefined values: `"small"`, `"medium"`, or `"large"`. Each size modifies the button's padding for a consistent look across different use cases.
-   **Variants**: The `variant` prop allows you to choose between:

    -   **`solid`**: A fully filled button with a background color.
    -   **`outlined`**: A button with just the border, no background color.
    -   **`ghost`**: A button with no background or border (transparent), useful for actions that don’t need a bold visual presence.

-   **Color Scheme**: The button adapts its colors based on the current theme (light or dark mode) using the `useColorScheme` hook from React Native. If no specific colors are provided, the default colors from your `Colors.ts` file are used.

-   **Icon**: Use the `icon` prop to display an icon from the `Ionicons` library. You can specify whether the icon is on the left or right of the button text with the `iconPosition` prop.

-   **Loading State**: When the `loading` prop is set to `true`, the button will display a loading spinner instead of the title text. The color of the spinner can be customized using the `loadingIndicatorColor` prop.

## Contributing

If you'd like to contribute to this Button component, feel free to fork this repository, make changes, and submit a pull request. Any improvements or suggestions are welcome!

## License

This Button component is licensed under the MIT License. See [LICENSE](./LICENSE) for more details.