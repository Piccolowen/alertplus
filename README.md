# alertplus

A simple system to generate alerts on your website.

## Features

- A smart detection system that will not display the alert if not enough parts of the alert are present.
- Lots of cutomization
- Unlimited amount of alerts
- JSON system
- Custom triggers (to do)

## READ THIS

alertplus automatically embeds `jQuery`, `Popper.js`, and `Bootstrap` into your HTML file.

**ALERTS ARE NOT CLOSABLE BECAUSE OF A WEIRD BUG**.

## usage

hold on for this section!

## JSON syntax

`title`: the title of the alert

|Supports|
|--------|
|String|

|Default|
|-|
|`null`|

`state`: how important the alert is. (success, or failure alert)

|Supports|
|-|
|`success`, `warning`, `danger`|

|Default|
|-|
|`warning`|

`content`: the content for the alert

|Supports|
|-|
|String|

|Default|
|-|
|`null`|

### optional syntax

`closeable`: if true, there will be an 'X' to close the alert. **THIS OPTION IS NOT SUPPORTED**

|Supports|
|-|
|`NOT_SUPPORTED`|

|Default|
|-|
|`null`|

`useinnerhtml`: specify whether to include HTML code in the alert.

|Supports|
|-|
|Bool|

|Default|
|-|
|`false`|

`useadvanced`: specify whether to use the more detailed alert system (**automatically uses `innerHTML`**)

|Supports|
|-|
|Bool|

|Default|
|-|
|`false`|

`heading`: the header for the `useadvanced` element. if `useadvanced` is not set, this will not be shown.

|Suports|
|-|
|String|

|Default|
|-|
|`null`|

`hr`: tells whether to show an `hr` element and another line of content

|Supports|
|-|
|Bool|

|Default|
|-|
|`false`|

`endingcontent`: the ending content for the `hr` element. if `hr` is not set, this will not be shown.

|Supports|
|-|
|Bool|

|Default|
|-|
|`false`|