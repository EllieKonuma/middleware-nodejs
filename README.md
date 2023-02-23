# Middleware NodeJs 😎

This API is a middleware access another API and can get all users and products or get ID user and product and also can return a buget based on tax of selected user at value chosed products.

## Requirements💅

The only requirement is the NodeJs ^16.16.0 version ✨

-<span style="color:#41BA45">**N**</span> [Nodejs](https://nodejs.org/en/download/) <span style="color:#41BA45">**N**</span>

## Running🏃‍♂️🏃‍♀️🏃

```shell
npm start
```

# Rest API

The API is hosted at `http://localhost:3000`

## Get users 👩‍🦰👩‍🦳👩‍🦱

To get all users

### Request

#### Method `GET`

#### Endpoint `/users`

### Response

#### Status `200`

#### Body

```json
[
  {
    "id": <int>,
    "name": <string>,
    "tax": <int>
  }, {...}
]
```

## Get user by ID 👩‍🦰

To get a single user by it's ID

### Request

#### Method `GET`

#### Endpoint `/users/:userId`

#### Params

| param    | type | description        |
| -------- | ---- | ------------------ |
| `userId` | int  | The user unique Id |

### Response

#### Status `200`

#### Body

```json
{
  "id": <int>,
  "name": <string>,
  "tax": <int>
}
```

## Get products 🍻

To get all products

### Request

#### Method `GET`

#### Endpoint `/products`

### Response

#### Status `200`

#### Body

```json
[
    {
        "id": <int>,
        "name": <string>,
        "price": <int>
    },{...}
]
```

## Get product by ID 🍺

To get a sigle product by it's ID

### Request

#### Method `GET`

#### Endpoint `/products/:productId`

#### Params

| param       | type | description           |
| ----------- | ---- | --------------------- |
| `productId` | int  | The product unique Id |

### Response

#### Status `200`

#### Body

```json
{
  "id": <int>,
  "name": <string>,
  "price": <int>
}
```

## Get products price 🤑

To sum all products and multiply for tax

### Request

#### Method `POST`

#### Body

```json
[
    productId<int>,
    productId<int>,
    ...
]
```

#### Endpoint `/users/:userId/purchase`

#### Params

| param    | type | description        |
| -------- | ---- | ------------------ |
| `userId` | int  | The user unique Id |

### Response

### Status `200`

#### Body

```json
{
    "total": <int>
}
```
___
Thanks for read! 🥹
bjs,
Ellie.
