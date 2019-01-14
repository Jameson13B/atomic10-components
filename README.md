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

### Primary Button

![Primary Button](./ReadmeImg/primarybutton.png)

This is a paragraph describing the PrimaryButton component. It will explain its details, quirks, and other info.

```
import { PrimaryButton } from "atomic10-components";

handleClick  =  ()  =>  {
	alert("Click");
};

<PrimaryButton  value="Click"  click={handleClick}  />
```

#### Properties

| Name      | Type     | Default     | Description                                    |
| --------- | -------- | ----------- | ---------------------------------------------- |
| `value`   | string   | null        | Text of the button                             |
| `click`   | function | null        | Callback for buttons onClick                   |
| `bkcolor` | string   | Neon Carrot | Background color. Accepts hex, rgb, and string |
| `ftcolor` | string   | White       | Font color. Accepts hex, rgb, and string       |

#### Styling

List of class names for styling.

| Name             | Element        |
| ---------------- | -------------- |
| `primary-button` | Button Element |

<hr />

### Secondary Button

![Secondary Button](./ReadmeImg/secondarybutton.png)

This is a paragraph describing the SecondaryButton component. It will explain its details, quirks, and other info.

```
import { SecondaryButton } from "atomic10-components";

handleClick  =  ()  =>  {
	alert("Click");
};

<SecondaryButton  value="Click"  click={handleClick}  />
```

#### Properties

| Name    | Type     | Default     | Description                                         |
| ------- | -------- | ----------- | --------------------------------------------------- |
| `value` | string   | null        | Text of the button                                  |
| `click` | function | null        | Callback for buttons onClick                        |
| `color` | string   | Neon Carrot | Border and font color. Accepts hex, rgb, and string |

#### Styling

List of class names for styling.

| Name               | Element        |
| ------------------ | -------------- |
| `secondary-button` | Button Element |

<hr />

## License

<!-- [MIT](http://vjpr.mit-license.org) -->

Coming Soon...

[version-image]: https://img.shields.io/npm/v/atomic10-components.svg
[version-url]: https://npmjs.org/package/atomic10-components
[download-image]: https://img.shields.io/npm/dt/atomic10-components.svg
[download-url]: https://npmjs.org/package/atomic10-components
