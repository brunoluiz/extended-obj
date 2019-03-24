# @brunoluiz/extended-obj

Objects and Enums with extended methods

## ExtendedObject

Create a key-value map with extra methods, such as

- `getByValue(v: any)`: returns value's key
- `keys()`: returns object keys
- `values()`: returns object values

```js
const { ExtendedObject } = require('@brunoluiz/extended-obj')
const o = ExtendedObject({ FOO: 'BAR' })

console.log(o.FOO) // BAR (normal object behaviour)
console.log(o.getByValue('BAR')) // FOO (returns value key)
console.log(o.values()) // ['BAR']
console.log(o.keys()) // ['FOO']
```

## Enum

Maps an array to a key-value map, where the values will be `[array item index] + 1`

```js
const { Enum } = require('@brunoluiz/extended-obj')
const e = Enum(['FOO', 'BAR'])

console.log(e.FOO) // 1
console.log(e.BAR) // 2
```

## ExtendedEnum

Create an `Enum` but with the extras added by `ExtendedObject`

```js
const { ExtendedEnum } = require('@brunoluiz/extended-obj')
const e = ExtendedEnum(['FOO', 'BAR'])

console.log(e.FOO) // 1
console.log(e.getByValue(1)) // 'FOO'
```
