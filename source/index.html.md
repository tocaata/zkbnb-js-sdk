---
title: API v1.0
language_tabs:
  - go: Go
  - java: Java
  - javascript: Javascript
  - javascript--node: Node.JS
  - ruby: Ruby
language_clients:
  - go: ""
  - java: ""
  - javascript: ""
  - javascript--node: ""
  - ruby: ""
toc_footers: []
includes: []
search: false
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="api"> v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Public APIs for zkbnb

<h1 id="api-root">Root</h1>

## Get status of zkbnb

<a id="opIdGetStatus"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /`

> Body parameter

> Example responses

> 200 Response

```json
{
  "status": 0,
  "network_id": 0
}
```

<h3 id="get-status-of-zkbnb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-account">Account</h1>

## Get account by account's name, index or pk

<a id="opIdGetAccount"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/account", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/account?by=string&value=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/account?by=string&value=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/account',
  params: {
  'by' => 'string',
'value' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/account`

> Body parameter

<h3 id="get-account-by-account's-name,-index-or-pk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|by|query|string|true|The query condition type to get the account data, and it could be account name, account index or account public key.|
|value|query|string|true|The query condition value to get the account data, and it is specified by the 'by' parameter above.|

> Example responses

> 200 Response

```json
{
  "status": 0,
  "index": 0,
  "name": "string",
  "pk": "string",
  "nonce": 0,
  "assets": [
    {
      "id": 0,
      "name": "string",
      "balance": "string",
      "price": "string"
    }
  ],
  "total_asset_value": "string"
}
```

<h3 id="get-account-by-account's-name,-index-or-pk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Account](#schemaaccount)|

<aside class="success">
This operation does not require authentication
</aside>

## Get accounts

<a id="opIdGetAccounts"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/accounts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/accounts?offset=0&limit=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/accounts?offset=0&limit=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/accounts',
  params: {
  'offset' => 'integer(int32)',
'limit' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/accounts`

> Body parameter

<h3 id="get-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|true|The query offset to get some specific range of the account list data.|
|limit|query|integer(int32)|true|The query limit size to get some specific range of the account list data.|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "accounts": [
    {
      "index": 0,
      "name": "string",
      "pk": "string"
    }
  ]
}
```

<h3 id="get-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Accounts](#schemaaccounts)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-nft">Nft</h1>

## Get nfts of a specific account

<a id="opIdGetAccountNfts"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/accountNfts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/accountNfts?by=string&value=string&offset=0&limit=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/accountNfts?by=string&value=string&offset=0&limit=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/accountNfts',
  params: {
  'by' => 'string',
'value' => 'string',
'offset' => 'integer(int32)',
'limit' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/accountNfts`

> Body parameter

<h3 id="get-nfts-of-a-specific-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|by|query|string|true|The query condition type to get the nft account data, and it could be account name, account index or account public key.|
|value|query|string|true|The query condition value to get the nft account data, and it is specified by the 'by' parameter above.|
|offset|query|integer(int32)|true|The query offset to get some specific range of the nft account data.|
|limit|query|integer(int32)|true|The query limit size to get some specific range of the nft account data.|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "nfts": [
    {
      "index": 0,
      "creator_account_index": 0,
      "creator_account_name": "string",
      "owner_account_index": 0,
      "owner_account_name": "string",
      "content_hash": "string",
      "l1_address": "string",
      "l1_token_id": "string",
      "creator_treasury_rate": 0,
      "collection_id": 0
    }
  ]
}
```

<h3 id="get-nfts-of-a-specific-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Nfts](#schemanfts)|

<aside class="success">
This operation does not require authentication
</aside>

## Get max nft offer id for a specific account

<a id="opIdGetMaxOfferId"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/maxOfferId", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/maxOfferId?account_index=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/maxOfferId?account_index=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/maxOfferId',
  params: {
  'account_index' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/maxOfferId`

> Body parameter

<h3 id="get-max-nft-offer-id-for-a-specific-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_index|query|integer(int32)|true|The account index query condition for querying maximum offer id in the nft situation.|

> Example responses

> 200 Response

```json
{
  "offer_id": 0
}
```

<h3 id="get-max-nft-offer-id-for-a-specific-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[MaxOfferId](#schemamaxofferid)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-transaction">Transaction</h1>

## Get pending transactions of a specific account

<a id="opIdGetAccountPendingTxs"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/accountPendingTxs", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/accountPendingTxs?by=string&value=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/accountPendingTxs?by=string&value=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/accountPendingTxs',
  params: {
  'by' => 'string',
'value' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/accountPendingTxs`

> Body parameter

<h3 id="get-pending-transactions-of-a-specific-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|by|query|string|true|The query condition type to get the pending transactions belonging to the account, and it could be account name, account index or account public key.|
|value|query|string|true|The query condition value to get the pending transactions belonging to the account, and it is specified by the 'by' parameter above.|
|types|query|integer(int64)|false|The transaction types of the pending transactions to be queried, and it could be like TxTypeDeposit, TxTypeTransfer or TxTypeAtomicMatch and so on.|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "txs": [
    {
      "hash": "string",
      "type": 0,
      "amount": "string",
      "info": "string",
      "status": 0,
      "index": 0,
      "gas_fee_asset_id": 0,
      "gas_fee": "string",
      "nft_index": 0,
      "collection_id": 0,
      "asset_id": 0,
      "asset_name": "string",
      "native_address": "string",
      "extra_info": "string",
      "memo": "string",
      "account_index": 0,
      "account_name": "string",
      "nonce": 0,
      "expire_at": 0,
      "block_height": 0,
      "created_at": 0,
      "state_root": "string",
      "to_account_index": 0,
      "to_account_name": "string"
    }
  ]
}
```

<h3 id="get-pending-transactions-of-a-specific-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Txs](#schematxs)|

<aside class="success">
This operation does not require authentication
</aside>

## Get transactions of a specific account

<a id="opIdGetAccountTxs"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/accountTxs", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/accountTxs?by=string&value=string&offset=0&limit=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/accountTxs?by=string&value=string&offset=0&limit=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/accountTxs',
  params: {
  'by' => 'string',
'value' => 'string',
'offset' => 'integer(int32)',
'limit' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/accountTxs`

> Body parameter

<h3 id="get-transactions-of-a-specific-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|by|query|string|true|The query condition type to get the transactions belonging to the account, and it could be account name, account index or account public key.|
|value|query|string|true|The query condition value to get the transactions belonging to the account, and it is specified by the 'by' parameter above.|
|types|query|integer(int64)|false|The transaction types of the transactions to be queried, and it could be like TxTypeDeposit, TxTypeTransfer or TxTypeAtomicMatch etc.|
|offset|query|integer(int32)|true|The query offset to get some specific range of the transactions belonging to the account.|
|limit|query|integer(int32)|true|The query limit size to get some specific range of the transactions belonging to the account.|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "txs": [
    {
      "hash": "string",
      "type": 0,
      "amount": "string",
      "info": "string",
      "status": 0,
      "index": 0,
      "gas_fee_asset_id": 0,
      "gas_fee": "string",
      "nft_index": 0,
      "collection_id": 0,
      "asset_id": 0,
      "asset_name": "string",
      "native_address": "string",
      "extra_info": "string",
      "memo": "string",
      "account_index": 0,
      "account_name": "string",
      "nonce": 0,
      "expire_at": 0,
      "block_height": 0,
      "created_at": 0,
      "state_root": "string",
      "to_account_index": 0,
      "to_account_name": "string"
    }
  ]
}
```

<h3 id="get-transactions-of-a-specific-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Txs](#schematxs)|

<aside class="success">
This operation does not require authentication
</aside>

## Get transactions in a block

<a id="opIdGetBlockTxs"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/blockTxs", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/blockTxs?by=string&value=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/blockTxs?by=string&value=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/blockTxs',
  params: {
  'by' => 'string',
'value' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/blockTxs`

> Body parameter

<h3 id="get-transactions-in-a-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|by|query|string|true|The query condition type to get the transactions in the specified block, and it could be block height or block commitment.|
|value|query|string|true|The query condition value to get the transactions in the specified block, and it is specified by the 'by' parameter above.|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "txs": [
    {
      "hash": "string",
      "type": 0,
      "amount": "string",
      "info": "string",
      "status": 0,
      "index": 0,
      "gas_fee_asset_id": 0,
      "gas_fee": "string",
      "nft_index": 0,
      "collection_id": 0,
      "asset_id": 0,
      "asset_name": "string",
      "native_address": "string",
      "extra_info": "string",
      "memo": "string",
      "account_index": 0,
      "account_name": "string",
      "nonce": 0,
      "expire_at": 0,
      "block_height": 0,
      "created_at": 0,
      "state_root": "string",
      "to_account_index": 0,
      "to_account_name": "string"
    }
  ]
}
```

<h3 id="get-transactions-in-a-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Txs](#schematxs)|

<aside class="success">
This operation does not require authentication
</aside>

## Get executed transactions which previously added to tx pool

<a id="opIdGetExecutedTxs"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/executedTxs", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/executedTxs?offset=0&limit=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/executedTxs?offset=0&limit=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/executedTxs',
  params: {
  'offset' => 'integer(int32)',
'limit' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/executedTxs`

> Body parameter

<h3 id="get-executed-transactions-which-previously-added-to-tx-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|true|The query offset to get some specific range of the executed transactions data.|
|limit|query|integer(int32)|true|The query limit size to get some specific range of the executed transactions data.|
|from_hash|query|string|false|The transaction hash query condition for the executed transactions data.|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "txs": [
    {
      "hash": "string",
      "type": 0,
      "amount": "string",
      "info": "string",
      "status": 0,
      "index": 0,
      "gas_fee_asset_id": 0,
      "gas_fee": "string",
      "nft_index": 0,
      "collection_id": 0,
      "asset_id": 0,
      "asset_name": "string",
      "native_address": "string",
      "extra_info": "string",
      "memo": "string",
      "account_index": 0,
      "account_name": "string",
      "nonce": 0,
      "expire_at": 0,
      "block_height": 0,
      "created_at": 0,
      "state_root": "string",
      "to_account_index": 0,
      "to_account_name": "string"
    }
  ]
}
```

<h3 id="get-executed-transactions-which-previously-added-to-tx-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Txs](#schematxs)|

<aside class="success">
This operation does not require authentication
</aside>

## Get next nonce

<a id="opIdGetNextNonce"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/nextNonce", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/nextNonce?account_index=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/nextNonce?account_index=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/nextNonce',
  params: {
  'account_index' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/nextNonce`

> Body parameter

<h3 id="get-next-nonce-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_index|query|integer(int32)|true|The account index query condition for getting the next nonce data.|

> Example responses

> 200 Response

```json
{
  "nonce": 0
}
```

<h3 id="get-next-nonce-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[NextNonce](#schemanextnonce)|

<aside class="success">
This operation does not require authentication
</aside>

## Get pending transactions

<a id="opIdGetPendingTxs"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/pendingTxs", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/pendingTxs?offset=0&limit=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/pendingTxs?offset=0&limit=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/pendingTxs',
  params: {
  'offset' => 'integer(int32)',
'limit' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/pendingTxs`

> Body parameter

<h3 id="get-pending-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|true|The query offset to get some specific range of the pending transactions data.|
|limit|query|integer(int32)|true|The query limit size to get some specific range of the pending transactions data.|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "txs": [
    {
      "hash": "string",
      "type": 0,
      "amount": "string",
      "info": "string",
      "status": 0,
      "index": 0,
      "gas_fee_asset_id": 0,
      "gas_fee": "string",
      "nft_index": 0,
      "collection_id": 0,
      "asset_id": 0,
      "asset_name": "string",
      "native_address": "string",
      "extra_info": "string",
      "memo": "string",
      "account_index": 0,
      "account_name": "string",
      "nonce": 0,
      "expire_at": 0,
      "block_height": 0,
      "created_at": 0,
      "state_root": "string",
      "to_account_index": 0,
      "to_account_name": "string"
    }
  ]
}
```

<h3 id="get-pending-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Txs](#schematxs)|

<aside class="success">
This operation does not require authentication
</aside>

## Send raw transaction

<a id="opIdSendTx"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/v1/sendTx", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/sendTx");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/sendTx',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.post '/api/v1/sendTx',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /api/v1/sendTx`

> Body parameter

> Example responses

> 200 Response

```json
{
  "tx_hash": "string"
}
```

<h3 id="send-raw-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[TxHash](#schematxhash)|

<aside class="success">
This operation does not require authentication
</aside>

## Get transaction by hash

<a id="opIdGetTx"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/tx", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/tx?hash=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/tx?hash=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/tx',
  params: {
  'hash' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/tx`

> Body parameter

<h3 id="get-transaction-by-hash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|query|string|true|The transaction hash condition to get the transaction data.|

> Example responses

> 200 Response

```json
{
  "": {
    "hash": "string",
    "type": 0,
    "amount": "string",
    "info": "string",
    "status": 0,
    "index": 0,
    "gas_fee_asset_id": 0,
    "gas_fee": "string",
    "nft_index": 0,
    "collection_id": 0,
    "asset_id": 0,
    "asset_name": "string",
    "native_address": "string",
    "extra_info": "string",
    "memo": "string",
    "account_index": 0,
    "account_name": "string",
    "nonce": 0,
    "expire_at": 0,
    "block_height": 0,
    "created_at": 0,
    "state_root": "string",
    "to_account_index": 0,
    "to_account_name": "string"
  },
  "committed_at": 0,
  "verified_at": 0,
  "executed_at": 0
}
```

<h3 id="get-transaction-by-hash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[EnrichedTx](#schemaenrichedtx)|

<aside class="success">
This operation does not require authentication
</aside>

## Get transactions which are already packed into blocks

<a id="opIdGetTxs"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/txs", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/txs?offset=0&limit=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/txs?offset=0&limit=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/txs',
  params: {
  'offset' => 'integer(int32)',
'limit' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/txs`

> Body parameter

<h3 id="get-transactions-which-are-already-packed-into-blocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|true|The query offset to get some specific range of the packed transactions data.|
|limit|query|integer(int32)|true|The query limit size to get some specific range of the packed transactions data.|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "txs": [
    {
      "hash": "string",
      "type": 0,
      "amount": "string",
      "info": "string",
      "status": 0,
      "index": 0,
      "gas_fee_asset_id": 0,
      "gas_fee": "string",
      "nft_index": 0,
      "collection_id": 0,
      "asset_id": 0,
      "asset_name": "string",
      "native_address": "string",
      "extra_info": "string",
      "memo": "string",
      "account_index": 0,
      "account_name": "string",
      "nonce": 0,
      "expire_at": 0,
      "block_height": 0,
      "created_at": 0,
      "state_root": "string",
      "to_account_index": 0,
      "to_account_name": "string"
    }
  ]
}
```

<h3 id="get-transactions-which-are-already-packed-into-blocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Txs](#schematxs)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-asset">Asset</h1>

## Get asset

<a id="opIdGetAsset"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/asset", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/asset?by=string&value=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/asset?by=string&value=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/asset',
  params: {
  'by' => 'string',
'value' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/asset`

> Body parameter

<h3 id="get-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|by|query|string|true|The query condition type to get the asset data, and it could be asset id or asset symbol.|
|value|query|string|true|The query condition value to get the asset data, and it is specified by the 'by' parameter above.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "decimals": 0,
  "symbol": "string",
  "address": "string",
  "price": "string",
  "is_gas_asset": 0,
  "icon": "string"
}
```

<h3 id="get-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Asset](#schemaasset)|

<aside class="success">
This operation does not require authentication
</aside>

## Get assets

<a id="opIdGetAssets"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/assets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/assets?offset=0&limit=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/assets?offset=0&limit=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/assets',
  params: {
  'offset' => 'integer(int32)',
'limit' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/assets`

> Body parameter

<h3 id="get-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|true|The query offset to get some specific range of the asset list data.|
|limit|query|integer(int32)|true|The query limit size to get some specific range of the asset list data.|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "assets": [
    {
      "id": 0,
      "name": "string",
      "decimals": 0,
      "symbol": "string",
      "address": "string",
      "price": "string",
      "is_gas_asset": 0,
      "icon": "string"
    }
  ]
}
```

<h3 id="get-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Assets](#schemaassets)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-block">Block</h1>

## Get block by its height or commitment

<a id="opIdGetBlock"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/block", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/block?by=string&value=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/block?by=string&value=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/block',
  params: {
  'by' => 'string',
'value' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/block`

> Body parameter

<h3 id="get-block-by-its-height-or-commitment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|by|query|string|true|The query condition type to get the block data, and it could be block height or block commitment.|
|value|query|string|true|The query condition value to get the block data, and it is specified by the 'by' parameter above.|

> Example responses

> 200 Response

```json
{
  "commitment": "string",
  "height": 0,
  "state_root": "string",
  "priority_operations": 0,
  "pending_on_chain_operations_hash": "string",
  "pending_on_chain_operations_pub_data": "string",
  "committed_tx_hash": "string",
  "committed_at": 0,
  "verified_tx_hash": "string",
  "verified_at": 0,
  "txs": [
    {
      "hash": "string",
      "type": 0,
      "amount": "string",
      "info": "string",
      "status": 0,
      "index": 0,
      "gas_fee_asset_id": 0,
      "gas_fee": "string",
      "nft_index": 0,
      "collection_id": 0,
      "asset_id": 0,
      "asset_name": "string",
      "native_address": "string",
      "extra_info": "string",
      "memo": "string",
      "account_index": 0,
      "account_name": "string",
      "nonce": 0,
      "expire_at": 0,
      "block_height": 0,
      "created_at": 0,
      "state_root": "string",
      "to_account_index": 0,
      "to_account_name": "string"
    }
  ],
  "status": 0,
  "size": null
}
```

<h3 id="get-block-by-its-height-or-commitment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Block](#schemablock)|

<aside class="success">
This operation does not require authentication
</aside>

## Get blocks

<a id="opIdGetBlocks"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/blocks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/blocks?offset=0&limit=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/blocks?offset=0&limit=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/blocks',
  params: {
  'offset' => 'integer(int32)',
'limit' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/blocks`

> Body parameter

<h3 id="get-blocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|true|The query offset to get some specific range of the block data.|
|limit|query|integer(int32)|true|The query limit size to get some specific range of the block data.|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "blocks": [
    {
      "commitment": "string",
      "height": 0,
      "state_root": "string",
      "priority_operations": 0,
      "pending_on_chain_operations_hash": "string",
      "pending_on_chain_operations_pub_data": "string",
      "committed_tx_hash": "string",
      "committed_at": 0,
      "verified_tx_hash": "string",
      "verified_at": 0,
      "txs": [
        {
          "hash": "string",
          "type": 0,
          "amount": "string",
          "info": "string",
          "status": 0,
          "index": 0,
          "gas_fee_asset_id": 0,
          "gas_fee": "string",
          "nft_index": 0,
          "collection_id": 0,
          "asset_id": 0,
          "asset_name": "string",
          "native_address": "string",
          "extra_info": "string",
          "memo": "string",
          "account_index": 0,
          "account_name": "string",
          "nonce": 0,
          "expire_at": 0,
          "block_height": 0,
          "created_at": 0,
          "state_root": "string",
          "to_account_index": 0,
          "to_account_name": "string"
        }
      ],
      "status": 0,
      "size": null
    }
  ]
}
```

<h3 id="get-blocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Blocks](#schemablocks)|

<aside class="success">
This operation does not require authentication
</aside>

## GetCurrentHeight

<a id="opIdGetCurrentHeight"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/currentHeight", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/currentHeight");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/currentHeight',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/currentHeight',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /api/v1/currentHeight`

> Body parameter

> Example responses

> 200 Response

```json
{
  "height": 0
}
```

<h3 id="getcurrentheight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[CurrentHeight](#schemacurrentheight)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-info">Info</h1>

## Get gas account, who will charge gas fees for transactions

<a id="opIdGetGasAccount"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/gasAccount", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/gasAccount");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/gasAccount',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/gasAccount',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /api/v1/gasAccount`

> Body parameter

> Example responses

> 200 Response

```json
{
  "status": 0,
  "index": 0,
  "name": "string"
}
```

<h3 id="get-gas-account,-who-will-charge-gas-fees-for-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[GasAccount](#schemagasaccount)|

<aside class="success">
This operation does not require authentication
</aside>

## Get gas fee amount for using a specific asset as gas asset

<a id="opIdGetGasFee"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/gasFee", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/gasFee?asset_id=0&tx_type=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/gasFee?asset_id=0&tx_type=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/gasFee',
  params: {
  'asset_id' => 'integer(int32)',
'tx_type' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/gasFee`

> Body parameter

<h3 id="get-gas-fee-amount-for-using-a-specific-asset-as-gas-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|query|integer(int32)|true|The asset id query condition for querying gas fee configuration.|
|tx_type|query|integer(int32)|true|The transaction type query condition for querying gas fee configuration.|

> Example responses

> 200 Response

```json
{
  "gas_fee": "string"
}
```

<h3 id="get-gas-fee-amount-for-using-a-specific-asset-as-gas-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[GasFee](#schemagasfee)|

<aside class="success">
This operation does not require authentication
</aside>

## Get supported gas fee assets

<a id="opIdGetGasFeeAssets"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/gasFeeAssets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/gasFeeAssets");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/gasFeeAssets',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/gasFeeAssets',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /api/v1/gasFeeAssets`

> Body parameter

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "id": 0,
      "name": "string",
      "decimals": 0,
      "symbol": "string",
      "address": "string",
      "price": "string",
      "is_gas_asset": 0,
      "icon": "string"
    }
  ]
}
```

<h3 id="get-supported-gas-fee-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[GasFeeAssets](#schemagasfeeassets)|

<aside class="success">
This operation does not require authentication
</aside>

## Get zkbnb general info, including contract address, and count of transactions and active users

<a id="opIdGetLayer2BasicInfo"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/layer2BasicInfo", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/layer2BasicInfo");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/layer2BasicInfo',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/layer2BasicInfo',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /api/v1/layer2BasicInfo`

> Body parameter

> Example responses

> 200 Response

```json
{
  "block_committed": 0,
  "block_verified": 0,
  "total_transaction_count": 0,
  "yesterday_transaction_count": 0,
  "today_transaction_count": 0,
  "yesterday_active_user_count": 0,
  "today_active_user_count": 0,
  "contract_addresses": [
    {
      "name": "string",
      "address": "string"
    }
  ]
}
```

<h3 id="get-zkbnb-general-info,-including-contract-address,-and-count-of-transactions-and-active-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Layer2BasicInfo](#schemalayer2basicinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Search with a specific keyword

<a id="opIdSearch"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("/api/v1/search?keyword=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v1/search?keyword=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/api/v1/search',
  params: {
  'keyword' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /api/v1/search`

> Body parameter

<h3 id="search-with-a-specific-keyword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyword|query|string|true|The keyword condition to search for block data here, and the keyword is actually the block height currently.|

> Example responses

> 200 Response

```json
{
  "data_type": 0
}
```

<h3 id="search-with-a-specific-keyword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|[Search](#schemasearch)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "status": 0,
  "index": 0,
  "name": "string",
  "pk": "string",
  "nonce": 0,
  "assets": [
    {
      "id": 0,
      "name": "string",
      "balance": "string",
      "price": "string"
    }
  ],
  "total_asset_value": "string"
}

```

Account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer(int32)|true|none|none|
|index|integer(int64)|true|none|none|
|name|string|true|none|none|
|pk|string|true|none|none|
|nonce|integer(int64)|true|none|none|
|assets|[[AccountAsset](#schemaaccountasset)]|true|none|none|
|total_asset_value|string|true|none|none|

<h2 id="tocS_AccountAsset">AccountAsset</h2>
<!-- backwards compatibility -->
<a id="schemaaccountasset"></a>
<a id="schema_AccountAsset"></a>
<a id="tocSaccountasset"></a>
<a id="tocsaccountasset"></a>

```json
{
  "id": 0,
  "name": "string",
  "balance": "string",
  "price": "string"
}

```

AccountAsset

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|name|string|true|none|none|
|balance|string|true|none|none|
|price|string|true|none|none|

<h2 id="tocS_Accounts">Accounts</h2>
<!-- backwards compatibility -->
<a id="schemaaccounts"></a>
<a id="schema_Accounts"></a>
<a id="tocSaccounts"></a>
<a id="tocsaccounts"></a>

```json
{
  "total": 0,
  "accounts": [
    {
      "index": 0,
      "name": "string",
      "pk": "string"
    }
  ]
}

```

Accounts

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|accounts|[[SimpleAccount](#schemasimpleaccount)]|true|none|none|

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "id": 0,
  "name": "string",
  "decimals": 0,
  "symbol": "string",
  "address": "string",
  "price": "string",
  "is_gas_asset": 0,
  "icon": "string"
}

```

Asset

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|name|string|true|none|none|
|decimals|integer(int32)|true|none|none|
|symbol|string|true|none|none|
|address|string|true|none|none|
|price|string|true|none|none|
|is_gas_asset|integer(int32)|true|none|none|
|icon|string|true|none|none|

<h2 id="tocS_Assets">Assets</h2>
<!-- backwards compatibility -->
<a id="schemaassets"></a>
<a id="schema_Assets"></a>
<a id="tocSassets"></a>
<a id="tocsassets"></a>

```json
{
  "total": 0,
  "assets": [
    {
      "id": 0,
      "name": "string",
      "decimals": 0,
      "symbol": "string",
      "address": "string",
      "price": "string",
      "is_gas_asset": 0,
      "icon": "string"
    }
  ]
}

```

Assets

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|assets|[[Asset](#schemaasset)]|true|none|none|

<h2 id="tocS_Block">Block</h2>
<!-- backwards compatibility -->
<a id="schemablock"></a>
<a id="schema_Block"></a>
<a id="tocSblock"></a>
<a id="tocsblock"></a>

```json
{
  "commitment": "string",
  "height": 0,
  "state_root": "string",
  "priority_operations": 0,
  "pending_on_chain_operations_hash": "string",
  "pending_on_chain_operations_pub_data": "string",
  "committed_tx_hash": "string",
  "committed_at": 0,
  "verified_tx_hash": "string",
  "verified_at": 0,
  "txs": [
    {
      "hash": "string",
      "type": 0,
      "amount": "string",
      "info": "string",
      "status": 0,
      "index": 0,
      "gas_fee_asset_id": 0,
      "gas_fee": "string",
      "nft_index": 0,
      "collection_id": 0,
      "asset_id": 0,
      "asset_name": "string",
      "native_address": "string",
      "extra_info": "string",
      "memo": "string",
      "account_index": 0,
      "account_name": "string",
      "nonce": 0,
      "expire_at": 0,
      "block_height": 0,
      "created_at": 0,
      "state_root": "string",
      "to_account_index": 0,
      "to_account_name": "string"
    }
  ],
  "status": 0,
  "size": null
}

```

Block

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitment|string|true|none|none|
|height|integer(int64)|true|none|none|
|state_root|string|true|none|none|
|priority_operations|integer(int64)|true|none|none|
|pending_on_chain_operations_hash|string|true|none|none|
|pending_on_chain_operations_pub_data|string|true|none|none|
|committed_tx_hash|string|true|none|none|
|committed_at|integer(int64)|true|none|none|
|verified_tx_hash|string|true|none|none|
|verified_at|integer(int64)|true|none|none|
|txs|[[Tx](#schematx)]|true|none|none|
|status|integer(int64)|true|none|none|
|size|[uint16](#schemauint16)|true|none|none|

<h2 id="tocS_Blocks">Blocks</h2>
<!-- backwards compatibility -->
<a id="schemablocks"></a>
<a id="schema_Blocks"></a>
<a id="tocSblocks"></a>
<a id="tocsblocks"></a>

```json
{
  "total": 0,
  "blocks": [
    {
      "commitment": "string",
      "height": 0,
      "state_root": "string",
      "priority_operations": 0,
      "pending_on_chain_operations_hash": "string",
      "pending_on_chain_operations_pub_data": "string",
      "committed_tx_hash": "string",
      "committed_at": 0,
      "verified_tx_hash": "string",
      "verified_at": 0,
      "txs": [
        {
          "hash": "string",
          "type": 0,
          "amount": "string",
          "info": "string",
          "status": 0,
          "index": 0,
          "gas_fee_asset_id": 0,
          "gas_fee": "string",
          "nft_index": 0,
          "collection_id": 0,
          "asset_id": 0,
          "asset_name": "string",
          "native_address": "string",
          "extra_info": "string",
          "memo": "string",
          "account_index": 0,
          "account_name": "string",
          "nonce": 0,
          "expire_at": 0,
          "block_height": 0,
          "created_at": 0,
          "state_root": "string",
          "to_account_index": 0,
          "to_account_name": "string"
        }
      ],
      "status": 0,
      "size": null
    }
  ]
}

```

Blocks

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|blocks|[[Block](#schemablock)]|true|none|none|

<h2 id="tocS_ContractAddress">ContractAddress</h2>
<!-- backwards compatibility -->
<a id="schemacontractaddress"></a>
<a id="schema_ContractAddress"></a>
<a id="tocScontractaddress"></a>
<a id="tocscontractaddress"></a>

```json
{
  "name": "string",
  "address": "string"
}

```

ContractAddress

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|address|string|true|none|none|

<h2 id="tocS_CurrentHeight">CurrentHeight</h2>
<!-- backwards compatibility -->
<a id="schemacurrentheight"></a>
<a id="schema_CurrentHeight"></a>
<a id="tocScurrentheight"></a>
<a id="tocscurrentheight"></a>

```json
{
  "height": 0
}

```

CurrentHeight

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int64)|true|none|none|

<h2 id="tocS_EnrichedTx">EnrichedTx</h2>
<!-- backwards compatibility -->
<a id="schemaenrichedtx"></a>
<a id="schema_EnrichedTx"></a>
<a id="tocSenrichedtx"></a>
<a id="tocsenrichedtx"></a>

```json
{
  "": {
    "hash": "string",
    "type": 0,
    "amount": "string",
    "info": "string",
    "status": 0,
    "index": 0,
    "gas_fee_asset_id": 0,
    "gas_fee": "string",
    "nft_index": 0,
    "collection_id": 0,
    "asset_id": 0,
    "asset_name": "string",
    "native_address": "string",
    "extra_info": "string",
    "memo": "string",
    "account_index": 0,
    "account_name": "string",
    "nonce": 0,
    "expire_at": 0,
    "block_height": 0,
    "created_at": 0,
    "state_root": "string",
    "to_account_index": 0,
    "to_account_name": "string"
  },
  "committed_at": 0,
  "verified_at": 0,
  "executed_at": 0
}

```

EnrichedTx

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Tx](#schematx)|false|none|none|
|committed_at|integer(int64)|true|none|none|
|verified_at|integer(int64)|true|none|none|
|executed_at|integer(int64)|true|none|none|

<h2 id="tocS_GasAccount">GasAccount</h2>
<!-- backwards compatibility -->
<a id="schemagasaccount"></a>
<a id="schema_GasAccount"></a>
<a id="tocSgasaccount"></a>
<a id="tocsgasaccount"></a>

```json
{
  "status": 0,
  "index": 0,
  "name": "string"
}

```

GasAccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer(int64)|true|none|none|
|index|integer(int64)|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_GasFee">GasFee</h2>
<!-- backwards compatibility -->
<a id="schemagasfee"></a>
<a id="schema_GasFee"></a>
<a id="tocSgasfee"></a>
<a id="tocsgasfee"></a>

```json
{
  "gas_fee": "string"
}

```

GasFee

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gas_fee|string|true|none|none|

<h2 id="tocS_GasFeeAssets">GasFeeAssets</h2>
<!-- backwards compatibility -->
<a id="schemagasfeeassets"></a>
<a id="schema_GasFeeAssets"></a>
<a id="tocSgasfeeassets"></a>
<a id="tocsgasfeeassets"></a>

```json
{
  "assets": [
    {
      "id": 0,
      "name": "string",
      "decimals": 0,
      "symbol": "string",
      "address": "string",
      "price": "string",
      "is_gas_asset": 0,
      "icon": "string"
    }
  ]
}

```

GasFeeAssets

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[[Asset](#schemaasset)]|true|none|none|

<h2 id="tocS_Layer2BasicInfo">Layer2BasicInfo</h2>
<!-- backwards compatibility -->
<a id="schemalayer2basicinfo"></a>
<a id="schema_Layer2BasicInfo"></a>
<a id="tocSlayer2basicinfo"></a>
<a id="tocslayer2basicinfo"></a>

```json
{
  "block_committed": 0,
  "block_verified": 0,
  "total_transaction_count": 0,
  "yesterday_transaction_count": 0,
  "today_transaction_count": 0,
  "yesterday_active_user_count": 0,
  "today_active_user_count": 0,
  "contract_addresses": [
    {
      "name": "string",
      "address": "string"
    }
  ]
}

```

Layer2BasicInfo

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block_committed|integer(int64)|true|none|none|
|block_verified|integer(int64)|true|none|none|
|total_transaction_count|integer(int64)|true|none|none|
|yesterday_transaction_count|integer(int64)|true|none|none|
|today_transaction_count|integer(int64)|true|none|none|
|yesterday_active_user_count|integer(int64)|true|none|none|
|today_active_user_count|integer(int64)|true|none|none|
|contract_addresses|[[ContractAddress](#schemacontractaddress)]|true|none|none|

<h2 id="tocS_MaxOfferId">MaxOfferId</h2>
<!-- backwards compatibility -->
<a id="schemamaxofferid"></a>
<a id="schema_MaxOfferId"></a>
<a id="tocSmaxofferid"></a>
<a id="tocsmaxofferid"></a>

```json
{
  "offer_id": 0
}

```

MaxOfferId

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offer_id|integer(int64)|true|none|none|

<h2 id="tocS_NextNonce">NextNonce</h2>
<!-- backwards compatibility -->
<a id="schemanextnonce"></a>
<a id="schema_NextNonce"></a>
<a id="tocSnextnonce"></a>
<a id="tocsnextnonce"></a>

```json
{
  "nonce": 0
}

```

NextNonce

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nonce|integer(int64)|true|none|none|

<h2 id="tocS_Nft">Nft</h2>
<!-- backwards compatibility -->
<a id="schemanft"></a>
<a id="schema_Nft"></a>
<a id="tocSnft"></a>
<a id="tocsnft"></a>

```json
{
  "index": 0,
  "creator_account_index": 0,
  "creator_account_name": "string",
  "owner_account_index": 0,
  "owner_account_name": "string",
  "content_hash": "string",
  "l1_address": "string",
  "l1_token_id": "string",
  "creator_treasury_rate": 0,
  "collection_id": 0
}

```

Nft

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int64)|true|none|none|
|creator_account_index|integer(int64)|true|none|none|
|creator_account_name|string|true|none|none|
|owner_account_index|integer(int64)|true|none|none|
|owner_account_name|string|true|none|none|
|content_hash|string|true|none|none|
|l1_address|string|true|none|none|
|l1_token_id|string|true|none|none|
|creator_treasury_rate|integer(int64)|true|none|none|
|collection_id|integer(int64)|true|none|none|

<h2 id="tocS_Nfts">Nfts</h2>
<!-- backwards compatibility -->
<a id="schemanfts"></a>
<a id="schema_Nfts"></a>
<a id="tocSnfts"></a>
<a id="tocsnfts"></a>

```json
{
  "total": 0,
  "nfts": [
    {
      "index": 0,
      "creator_account_index": 0,
      "creator_account_name": "string",
      "owner_account_index": 0,
      "owner_account_name": "string",
      "content_hash": "string",
      "l1_address": "string",
      "l1_token_id": "string",
      "creator_treasury_rate": 0,
      "collection_id": 0
    }
  ]
}

```

Nfts

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int64)|true|none|none|
|nfts|[[Nft](#schemanft)]|true|none|none|

<h2 id="tocS_ReqGetAccount">ReqGetAccount</h2>
<!-- backwards compatibility -->
<a id="schemareqgetaccount"></a>
<a id="schema_ReqGetAccount"></a>
<a id="tocSreqgetaccount"></a>
<a id="tocsreqgetaccount"></a>

```json
{
  "by": "string",
  "value": "string"
}

```

ReqGetAccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|by|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_ReqGetAccountNfts">ReqGetAccountNfts</h2>
<!-- backwards compatibility -->
<a id="schemareqgetaccountnfts"></a>
<a id="schema_ReqGetAccountNfts"></a>
<a id="tocSreqgetaccountnfts"></a>
<a id="tocsreqgetaccountnfts"></a>

```json
{
  "by": "string",
  "value": "string",
  "offset": null,
  "limit": null
}

```

ReqGetAccountNfts

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|by|string|true|none|none|
|value|string|true|none|none|
|offset|[uint16](#schemauint16)|true|none|none|
|limit|[uint16](#schemauint16)|true|none|none|

<h2 id="tocS_ReqGetAccountPendingTxs">ReqGetAccountPendingTxs</h2>
<!-- backwards compatibility -->
<a id="schemareqgetaccountpendingtxs"></a>
<a id="schema_ReqGetAccountPendingTxs"></a>
<a id="tocSreqgetaccountpendingtxs"></a>
<a id="tocsreqgetaccountpendingtxs"></a>

```json
{
  "by": "string",
  "value": "string",
  "types": [
    0
  ]
}

```

ReqGetAccountPendingTxs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|by|string|true|none|none|
|value|string|true|none|none|
|types|[integer]|false|none|none|

<h2 id="tocS_ReqGetAccountTxs">ReqGetAccountTxs</h2>
<!-- backwards compatibility -->
<a id="schemareqgetaccounttxs"></a>
<a id="schema_ReqGetAccountTxs"></a>
<a id="tocSreqgetaccounttxs"></a>
<a id="tocsreqgetaccounttxs"></a>

```json
{
  "by": "string",
  "value": "string",
  "types": [
    0
  ],
  "offset": null,
  "limit": null
}

```

ReqGetAccountTxs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|by|string|true|none|none|
|value|string|true|none|none|
|types|[integer]|false|none|none|
|offset|[uint16](#schemauint16)|true|none|none|
|limit|[uint16](#schemauint16)|true|none|none|

<h2 id="tocS_ReqGetAsset">ReqGetAsset</h2>
<!-- backwards compatibility -->
<a id="schemareqgetasset"></a>
<a id="schema_ReqGetAsset"></a>
<a id="tocSreqgetasset"></a>
<a id="tocsreqgetasset"></a>

```json
{
  "by": "string",
  "value": "string"
}

```

ReqGetAsset

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|by|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_ReqGetBlock">ReqGetBlock</h2>
<!-- backwards compatibility -->
<a id="schemareqgetblock"></a>
<a id="schema_ReqGetBlock"></a>
<a id="tocSreqgetblock"></a>
<a id="tocsreqgetblock"></a>

```json
{
  "by": "string",
  "value": "string"
}

```

ReqGetBlock

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|by|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_ReqGetBlockTxs">ReqGetBlockTxs</h2>
<!-- backwards compatibility -->
<a id="schemareqgetblocktxs"></a>
<a id="schema_ReqGetBlockTxs"></a>
<a id="tocSreqgetblocktxs"></a>
<a id="tocsreqgetblocktxs"></a>

```json
{
  "by": "string",
  "value": "string"
}

```

ReqGetBlockTxs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|by|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_ReqGetGasFee">ReqGetGasFee</h2>
<!-- backwards compatibility -->
<a id="schemareqgetgasfee"></a>
<a id="schema_ReqGetGasFee"></a>
<a id="tocSreqgetgasfee"></a>
<a id="tocsreqgetgasfee"></a>

```json
{
  "asset_id": 0,
  "tx_type": 0
}

```

ReqGetGasFee

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_id|integer(int32)|true|none|none|
|tx_type|integer(int32)|true|none|none|

<h2 id="tocS_ReqGetMaxOfferId">ReqGetMaxOfferId</h2>
<!-- backwards compatibility -->
<a id="schemareqgetmaxofferid"></a>
<a id="schema_ReqGetMaxOfferId"></a>
<a id="tocSreqgetmaxofferid"></a>
<a id="tocsreqgetmaxofferid"></a>

```json
{
  "account_index": 0
}

```

ReqGetMaxOfferId

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_index|integer(int32)|true|none|none|

<h2 id="tocS_ReqGetNextNonce">ReqGetNextNonce</h2>
<!-- backwards compatibility -->
<a id="schemareqgetnextnonce"></a>
<a id="schema_ReqGetNextNonce"></a>
<a id="tocSreqgetnextnonce"></a>
<a id="tocsreqgetnextnonce"></a>

```json
{
  "account_index": 0
}

```

ReqGetNextNonce

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_index|integer(int32)|true|none|none|

<h2 id="tocS_ReqGetRange">ReqGetRange</h2>
<!-- backwards compatibility -->
<a id="schemareqgetrange"></a>
<a id="schema_ReqGetRange"></a>
<a id="tocSreqgetrange"></a>
<a id="tocsreqgetrange"></a>

```json
{
  "offset": 0,
  "limit": 0
}

```

ReqGetRange

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offset|integer(int32)|true|none|none|
|limit|integer(int32)|true|none|none|

<h2 id="tocS_ReqGetRangeWithFromHash">ReqGetRangeWithFromHash</h2>
<!-- backwards compatibility -->
<a id="schemareqgetrangewithfromhash"></a>
<a id="schema_ReqGetRangeWithFromHash"></a>
<a id="tocSreqgetrangewithfromhash"></a>
<a id="tocsreqgetrangewithfromhash"></a>

```json
{
  "offset": 0,
  "limit": 0,
  "from_hash": "string"
}

```

ReqGetRangeWithFromHash

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offset|integer(int32)|true|none|none|
|limit|integer(int32)|true|none|none|
|from_hash|string|false|none|none|

<h2 id="tocS_ReqGetTx">ReqGetTx</h2>
<!-- backwards compatibility -->
<a id="schemareqgettx"></a>
<a id="schema_ReqGetTx"></a>
<a id="tocSreqgettx"></a>
<a id="tocsreqgettx"></a>

```json
{
  "hash": "string"
}

```

ReqGetTx

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|true|none|none|

<h2 id="tocS_ReqSearch">ReqSearch</h2>
<!-- backwards compatibility -->
<a id="schemareqsearch"></a>
<a id="schema_ReqSearch"></a>
<a id="tocSreqsearch"></a>
<a id="tocsreqsearch"></a>

```json
{
  "keyword": "string"
}

```

ReqSearch

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyword|string|true|none|none|

<h2 id="tocS_ReqSendTx">ReqSendTx</h2>
<!-- backwards compatibility -->
<a id="schemareqsendtx"></a>
<a id="schema_ReqSendTx"></a>
<a id="tocSreqsendtx"></a>
<a id="tocsreqsendtx"></a>

```json
{
  "tx_type": 0,
  "tx_info": "string"
}

```

ReqSendTx

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tx_type|integer(int32)|true|none|none|
|tx_info|string|true|none|none|

<h2 id="tocS_Search">Search</h2>
<!-- backwards compatibility -->
<a id="schemasearch"></a>
<a id="schema_Search"></a>
<a id="tocSsearch"></a>
<a id="tocssearch"></a>

```json
{
  "data_type": 0
}

```

Search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_type|integer(int32)|true|none|none|

<h2 id="tocS_SimpleAccount">SimpleAccount</h2>
<!-- backwards compatibility -->
<a id="schemasimpleaccount"></a>
<a id="schema_SimpleAccount"></a>
<a id="tocSsimpleaccount"></a>
<a id="tocssimpleaccount"></a>

```json
{
  "index": 0,
  "name": "string",
  "pk": "string"
}

```

SimpleAccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int64)|true|none|none|
|name|string|true|none|none|
|pk|string|true|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "status": 0,
  "network_id": 0
}

```

Status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer(int32)|true|none|none|
|network_id|integer(int32)|true|none|none|

<h2 id="tocS_Tx">Tx</h2>
<!-- backwards compatibility -->
<a id="schematx"></a>
<a id="schema_Tx"></a>
<a id="tocStx"></a>
<a id="tocstx"></a>

```json
{
  "hash": "string",
  "type": 0,
  "amount": "string",
  "info": "string",
  "status": 0,
  "index": 0,
  "gas_fee_asset_id": 0,
  "gas_fee": "string",
  "nft_index": 0,
  "collection_id": 0,
  "asset_id": 0,
  "asset_name": "string",
  "native_address": "string",
  "extra_info": "string",
  "memo": "string",
  "account_index": 0,
  "account_name": "string",
  "nonce": 0,
  "expire_at": 0,
  "block_height": 0,
  "created_at": 0,
  "state_root": "string",
  "to_account_index": 0,
  "to_account_name": "string"
}

```

Tx

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|true|none|none|
|type|integer(int64)|true|none|none|
|amount|string|true|none|none|
|info|string|true|none|none|
|status|integer(int64)|true|none|none|
|index|integer(int64)|true|none|none|
|gas_fee_asset_id|integer(int64)|true|none|none|
|gas_fee|string|true|none|none|
|nft_index|integer(int64)|true|none|none|
|collection_id|integer(int64)|true|none|none|
|asset_id|integer(int64)|true|none|none|
|asset_name|string|true|none|none|
|native_address|string|true|none|none|
|extra_info|string|true|none|none|
|memo|string|true|none|none|
|account_index|integer(int64)|true|none|none|
|account_name|string|true|none|none|
|nonce|integer(int64)|true|none|none|
|expire_at|integer(int64)|true|none|none|
|block_height|integer(int64)|true|none|none|
|created_at|integer(int64)|true|none|none|
|state_root|string|true|none|none|
|to_account_index|integer(int64)|true|none|none|
|to_account_name|string|true|none|none|

<h2 id="tocS_TxHash">TxHash</h2>
<!-- backwards compatibility -->
<a id="schematxhash"></a>
<a id="schema_TxHash"></a>
<a id="tocStxhash"></a>
<a id="tocstxhash"></a>

```json
{
  "tx_hash": "string"
}

```

TxHash

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tx_hash|string|true|none|none|

<h2 id="tocS_Txs">Txs</h2>
<!-- backwards compatibility -->
<a id="schematxs"></a>
<a id="schema_Txs"></a>
<a id="tocStxs"></a>
<a id="tocstxs"></a>

```json
{
  "total": 0,
  "txs": [
    {
      "hash": "string",
      "type": 0,
      "amount": "string",
      "info": "string",
      "status": 0,
      "index": 0,
      "gas_fee_asset_id": 0,
      "gas_fee": "string",
      "nft_index": 0,
      "collection_id": 0,
      "asset_id": 0,
      "asset_name": "string",
      "native_address": "string",
      "extra_info": "string",
      "memo": "string",
      "account_index": 0,
      "account_name": "string",
      "nonce": 0,
      "expire_at": 0,
      "block_height": 0,
      "created_at": 0,
      "state_root": "string",
      "to_account_index": 0,
      "to_account_name": "string"
    }
  ]
}

```

Txs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|txs|[[Tx](#schematx)]|true|none|none|

