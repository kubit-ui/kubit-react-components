# Directory Fonts Complete

Generate a complete list of fonts and their sources from a directory.

## Usage

``` js
return require('directory-fonts-complete')('/System Folder/Fonts', ['custom/font/path/on/site']);
```

yields

``` json
{
    "Apple Braille": {
        "variants": {
            "400": {
                "normal": {
                    {
                        "local": [
                            "Apple Braille",
                            "AppleBraille"
                        ],
                        "url": {
                            "ttf": "/System/Library/Fonts/Apple Braille.ttf"
                        }
                    }
                }
            }
        }
    },
    ...
}
```
