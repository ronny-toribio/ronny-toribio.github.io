---
order: 3
layout: project
title: "Coffeeless Magic Tokens"
technologies: ['Typescript', 'Javascript', 'React', 'TSX', 'CSS']
summary: "The coffeeless magic tokens package provides widgets and react hooks for displaying streaming text. We use this package on the Coffeeless Programming Smart Search page for displaying decoded tokens from our RAG semantic search system using a glowing effect. Our glow widget has light and dark themes that match Coffeeless Programming's day and night themes. You can customize the colors using props. The widget also detects overflow and displays a button that allows you to expand and collapse the widget depending on your needs."
---

![Coffeless](/assets/img/coffeeless/large-icon.svg)
## Coffeeless Magic Tokens React Widget

The coffeeless magic tokens package provides widgets and react hooks for displaying streaming text. We use this package on the Coffeeless Programming Smart Search page for displaying decoded tokens from our RAG semantic search system using a glowing effect. Our glow widget has light and dark themes that match Coffeeless Programming's day and night themes. You can customize the colors using props. The widget also detects overflow and displays a button that allows you to expand and collapse the widget depending on your needs.

Check out Magic Tokens on [Coffeeless Programming Smart Search page](https://www.coffeelessprogramming.com/search?query=javascript).
View the source code on the [Coffeeless Programming Playground Github](https://github.com/Coffeeless-Programming-Playground/coffeeless-magic-tokens).

The package is divided into css, components, hooks and themes.

The `MagicTokensGlowWidget` allows for the display streaming text chunks.
The chunks have a glow effect as they are rendered.
This component depends on two hooks `useGlowGeneration` which handles the
animation and insertion of the chunks and `useContentExpansion` for handling
text overflow in the widget.

The `MagicTokensGlowWidget` accepts the following customizable props:
- textAnimationContainerRef: React.Ref<HTMLDivElement>;
- textColor?: string;
- glowColor?: string;
- fadeDuration?: number;
- title?: string;
- footer?: string;
- footerColor?: string;
- innerBackgroundColor?: string;
- innerBorderColor: string;
- innerBoxShadowInsetColor?: string;
- innerBoxShadowInsetBlur?: string;
- innerBoxShadowInsetSpread?: string;
- innerBoxShadowOutsetColor?: string;
- innerBoxShadowOutsetBlur?: string;
- innerBoxShadowOutsetSpread?: string;
- textFontSize?: string;
- textFontFamily?: string;
- expandButtonBackground?: string;
- expandButtonColor?: string;
- gradientStartColor?: string;
- gradientEndColor?: string;
- expanded: boolean;
- overflowing: boolean;
- maxHeight: number | 'auto';
- onToggleExpansion(): void;

This package also includes two theme variants for the color props:
- `DarkThemeProps`
- `LightThemeProps`

These themes contain the following color string props for the `MagicTokensGlowWidget`:
- `TEXT_COLOR`
- `GLOW_COLOR`
- `FOOTER_COLOR`
- `INNER_BACKGROUND`
- `INNER_BORDER_COLOR`
- `INNER_BOX_SHADOW_INSET`
- `INNER_BOX_SHADOW_OUTSET`
- `EXPAND_BUTTON_BACKGROUND`
- `EXPAND_BUTTON_COLOR`
- `GRADIENT_START_COLOR`
- `GRADIENT_END_COLOR`