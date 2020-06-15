# alertplus

A simple system to generate alerts on your website.

## Features

- A smart detection system that will not display the alert if not enough parts of the alert are present.
- Lots of cutomization
- Unlimited amount of alerts
- JSON system
- Custom triggers

## READ THIS

alertplus automatically embeds `jQuery`, `Popper.js`, and `Bootstrap` into your HTML file.

**ALERTS ARE NOT CLOSABLE BECAUSE OF A WEIRD BUG**.

## usage

### getting started...

all you need to use **alertplus** is a `div` element with id `alertplus-out`, `alerts.js` and a `alerts.json` file! (make sure the `alerts.json` file is in the same directory as `alerts.js`)

the `div` element should look like this:

```html
<div id="alertplus-out">
    <!--This is where the alerts will be generated-->
</div>
```

**Make sure the `div` element is where you will want the alerts to generate on your page**

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
|`success`, `warning`, `danger`, `primary`|

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

### custom trigger syntax

alertplus supports custom triggers for your alerts. the default trigger is when the window loads.

`JSON` element:

`trigger`: allows you to add a custom trigger

|Supports|
|-|
|Special String|

|Default|
|-|
|`window.onload`|

**format**

`{TRIGGER}:{ELEMENT}`

the `{ELEMENT}` should be an ID. it can be another selector since **alertplus** uses `querySelector()`. but it's recommended you use an ID

**supported triggers**

`onclick` and `onload` (buggy)