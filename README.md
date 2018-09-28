# class-name

library helper for get class name. Support condition (true | false | 1 | 0 | null | undefined) and cammelCase to Dash

```
import ClassName from 'class-name';

classes = {
  'kiri': true,
  'kanan': 1,
  'warning': undefined,
  'error': false,
  'panix': 0,
  'danger': null,
  leftSide: true
};

console.log(ClassName(classes)); // output: kiri kanan left-side
```
