# alertplus

A simple system to generate alerts on your website.

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

`useadvanced`: specify whether to use the more detailed alert system

|Supports|
|-|
|Bool|

|Default|
|-|
|`false`|