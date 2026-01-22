# b3b

buffer convert util

### convert map

```
ArrayBuffer -------- Buffer
\                      /
 \                    /
   ----  base64  -----
```

### api

- #### <a href="index.js?source#L7" target="_blank"><b>0</b></a>

  - **<u>file</u>**: 

    buffer convert util

  - **<u>author</u>**: 

    junmer

  - **<u>description</u>**: 

    ArrayBuffer / Buffer / base64 convert util

- #### <a href="index.js?source#L16" target="_blank"><b>ab2b (alias: arrayBufferToBuffer ) </b></a>
  convert arrayBuffer to buffer

  - **<u>param</u>**: `ab` { _ArrayBuffer_ }

    arrayBuffer

  - **<u>return</u>**: { _buffer_ }

    buffer

- #### <a href="index.js?source#L36" target="_blank"><b>b2ab (alias: bufferToArrayBuffer ) </b></a>
  convert buffer to arrayBuffer

  - **<u>param</u>**: `buffer` { _buffer_ }

    buffer

  - **<u>return</u>**: { _ArrayBuffer_ }

    arrayBuffer

- #### <a href="index.js?source#L56" target="_blank"><b>a2b (alias: base64ToBuffer ) </b></a>
  convert base64 string to buffer

  - **<u>param</u>**: `str` { _string_ }

    base64 string

  - **<u>return</u>**: { _Buffer_ }

    buffer

- #### <a href="index.js?source#L67" target="_blank"><b>b2a (alias: bufferToBase64 ) </b></a>
  convert buffer to base64 string

  - **<u>param</u>**: `str` { _string|Buffer_ }

    string or buffer

  - **<u>return</u>**: { _string_ }

    base64 string

- #### <a href="index.js?source#L87" target="_blank"><b>b2b (alias: bytesToBase64 ) </b></a>
  convert arraybuffer to base64 string

  - **<u>param</u>**: `ab` { _ArrayBuffer|Array_ }

    ArrayBuffer or Array

  - **<u>return</u>**: { _string_ }

    base64 string

