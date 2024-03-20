# Icon

## Important

This is an internal component and it will not be exported.

&nbsp;

## Usage

The component can be used as an icon or a component. It's used by other components to conditional render element or icon based on the type of "icon" prop.

```javascript
import Icon from 'Icon';

const icon = 'ARROW_ICON';

<Icon icon={icon} altText="Arrow" width="24px" height="24px" />;
```

&nbsp;

## Props

| Property                     | Description                                  | Variant                 | Default | Optional | Allowed values |
| ---------------------------- | -------------------------------------------- | ----------------------- | ------- | -------- | -------------- |
| icon                         | Name or url of the icon                      | String                  | -       | no       | -              |
| altText                      | Alternative text of the icon                 | String                  | -       | yes      | -              |
| ariaChecked                  | Indicates if Icon is checked or not          | Boolean                 | -       | yes      | -              |
| ariaHidden                   | Icon's aria hidden                           | Boolean                 | -       | yes      | -              |
| color                        | Icon color                                   | String                  | -       | yes      | -              |
| height                       | Icon height                                  | String                  | -       | yes      | -              |
| isLinearIcon                 | Icon is svg                                  | Boolean                 | -       | yes      | -              |
| onClick                      | Function of the icon when user clicks        | Function                | -       | yes      | -              |
| role                         | Role                                         | String                  | -       | yes      | -              |
| width                        | Icon width                                   | String                  | -       | yes      | -              |
| ariaLabel                    | Icon's aria label                            | String                  | -       | yes      | -              |
| rotate                       | Rotates the icon                             | String                  | '0deg'  | yes      | -              |
| transitionDuration           | Time of transition                           | String                  | '0.2s'  | yes      | -              |
| tabIndex                     | To manage keyboard focus                     | Number                  | -       | yes      | -              |
| dataTestId                   | Element identifier used for testing purposes | String                  | -       | yes      | -              |
| twistAnimationTransformValue | Value for the 'transform' css property       | String, null, undefined | -       | yes      | -              |
| screenReaderText             | Help text for screen readers                 | String                  | -       | yes      | -              |
