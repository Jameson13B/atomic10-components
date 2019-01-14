# Atomic10 Components

> Atomic10 is a React component library with clean, contemporary, and customizable components

[![NPM Version][version-image]][version-url]
[![NPM Download][download-image]][download-url]

<!-- [![Linux Build][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url] -->

## Install

```bash
npm i atomic10-components
```

## Usage

> ### Components:
>
> [Primary Button](#Primary-Button)  
> [Secondary Button](#Secondary-Button)
>
> [Simple Card](#Simple-Card)  
> [Advanced Card](#Advanced-Card)

### Primary Button

![Primary Button](./ReadmeImg/primarybutton.png)

This primary button is a solid color button with rounded corners. There is a shrink hover effect on this button. Customize the color, text, and onClick function.

```
import { PrimaryButton } from "atomic10-components";

handleClick  =  ()  =>  {
	alert("Click");
};

<PrimaryButton  value="Click"  click={handleClick}  />
```

#### Properties

| Name      | Type     | Default       | Description                                    |
| --------- | -------- | ------------- | ---------------------------------------------- |
| `bkcolor` | string   | `Neon Carrot` | Background color. Accepts hex, rgb, and string |
| `click`   | function | null          | Callback for buttons onClick                   |
| `ftcolor` | string   | `White`       | Font color. Accepts hex, rgb, and string       |
| `value`   | string   | null          | Text of the button                             |

#### Styling

List of class names for styling.

| Name             | Element     |
| ---------------- | ----------- |
| `primary-button` | Div Element |

<hr />

### Secondary Button

![Secondary Button](./ReadmeImg/secondarybutton.png)

This secondary button is a solid white button with colored border and text. This button has rounded corners. There is a shrink hover effect on this button. Customize the color, text, and onClick function.

```
import { SecondaryButton } from "atomic10-components";

handleClick  =  ()  =>  {
	alert("Click");
};

<SecondaryButton  value="Click"  click={handleClick}  />
```

#### Properties

| Name    | Type     | Default       | Description                                         |
| ------- | -------- | ------------- | --------------------------------------------------- |
| `click` | function | null          | Callback for buttons onClick                        |
| `color` | string   | `Neon Carrot` | Border and font color. Accepts hex, rgb, and string |
| `value` | string   | null          | Text of the button                                  |

#### Styling

List of class names for styling.

| Name               | Element     |
| ------------------ | ----------- |
| `secondary-button` | Div Element |

<hr />

### Simple Card

![Simple Card](./ReadmeImg/simplecard.png)

This is a simple card that can store data for a product, service, etc. Card can have an onClick added. All content is customizable and the box will auto format as info grows.

```
import { SimpleCard } from "atomic10-components";

handleClick  =  ()  =>  {
	alert("Click");
};

<SimpleCard
  title="Simple Card"
  subTitle="Subtitle"
  paragraph="Advanced card that has an image and a button. This is a paragraph."
  click={() => alert("Card Click")}
/>
```

#### Properties

| Name        | Type     | Default | Description                                |
| ----------- | -------- | ------- | ------------------------------------------ |
| `brdColor`  | string   | `Black` | Border color. Accepts hex, rgb, and string |
| `click`     | function | null    | Callback for card onClick                  |
| `paragraph` | string   | null    | Paragraph for card                         |
| `title`     | string   | null    | Text of the card                           |
| `subTitle`  | string   | null    | Subtitle for card                          |
| `width`     | string   | `30%`   | Width for card                             |

#### Styling

List of class names for styling.

| Name               | Element     |
| ------------------ | ----------- |
| `secondary-button` | Div Element |
| `title`            | Div Element |
| `subtitle`         | Div Element |
| `paragraph`        | Div Element |

<hr />

### Advanced Card

![Advanced Card](./ReadmeImg/advancedcard.png)

This is an advanced card that can store data for a product, service, profile, etc. Card and button have separate customizable onClick. Image, content are customizable and the box will auto format as info grows.

```
import { AdvancedCard } from "atomic10-components";

handleClick  =  ()  =>  {
	alert("Click");
};

<AdvancedCard
  title="Simple Card"
  subTitle="Subtitle"
  paragraph="Advanced card that has an image and a button. This is a paragraph."
  click={() => alert("Card Click")}
  btnClick={() => alert("Button Click")}
  btnValue="Click"
  image="https://goo.gl/2QuCc5"
  width="50%"
/>
```

#### Properties

| Name        | Type     | Default       | Description                                |
| ----------- | -------- | ------------- | ------------------------------------------ |
| `brdColor`  | string   | `Black`       | Border color. Accepts hex, rgb, and string |
| `btnClick`  | function | null          | Callback for button onClick                |
| `btnColor`  | string   | `Neon Carrot` | Button color. Accepts hex, rgb, and string |
| `btnValue`  | string   | `Black`       | Text of the button                         |
| `click`     | function | null          | Callback for card onClick                  |
| `image`     | image    | null          | Image for header                           |
| `paragraph` | string   | null          | Paragraph for card                         |
| `title`     | string   | null          | Text of the card                           |
| `subTitle`  | string   | null          | Subtitle for card                          |
| `width`     | string   | `30%`         | Width for card                             |

#### Styling

List of class names for styling.

| Name              | Element     |
| ----------------- | ----------- |
| `advanced-button` | Div Element |
| `img`             | Img Element |
| `title`           | Div Element |
| `subtitle`        | Div Element |
| `paragraph`       | Div Element |

<hr />

## License

<!-- [MIT](http://vjpr.mit-license.org) -->

Coming Soon...

[version-image]: https://img.shields.io/npm/v/atomic10-components.svg
[version-url]: https://npmjs.org/package/atomic10-components
[download-image]: https://img.shields.io/npm/dt/atomic10-components.svg
[download-url]: https://npmjs.org/package/atomic10-components
