# API Reference
##  API Document Description
* The base endpoint is: **https://testnet-api.zkbnbchain.org**

## API List
### Get status of zkbnb
```
GET /
```
##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Status](#status) |

### Get account by account's name, index or pk
```
GET /api/v1/account
```
##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| by | query | name/index/pk | Yes | string |
| value | query | value of name/index/pk | Yes | string |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Account](#account) |

### Get pending transactions of a specific account
```
GET /api/v1/accountPendingTxs
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| by | query | account_name/account_index/account_pk | Yes | string |
| value | query | value of account_name/account_index/account_pk | Yes | string |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Txs](#txs) |

### Get nfts of a specific account
```
GET /api/v1/accountNfts
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| by | query | account_name/account_index/account_pk | Yes | string |
| value | query | value of account_name/account_index/account_pk | Yes | string |
| offset | query | offset, min 0 and max 100000 | Yes | integer |
| limit | query | limit, min 1 and max 100 | Yes | integer |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Nfts](#nfts) |

### Get transactions of a specific account
```
GET /api/v1/accountTxs
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| by | query | account_name/account_index/account_pk | Yes | string |
| value | query | value of account_name/account_index/account_pk | Yes | string |
| offset | query | offset, min 0 and max 100000 | Yes | integer |
| limit | query | limit, min 1 and max 100 | Yes | integer |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Txs](#txs) |

### Get accounts
```
GET /api/v1/accounts
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| offset | query | offset, min 0 and max 100000 | Yes | integer |
| limit | query | limit, min 1 and max 100 | Yes | integer |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Accounts](#accounts) |

### Get asset
```
GET /api/v1/asset
```

##### Parameters:

| Name  | Located in | Description        | Required | Schema  |
|-------| ---------- |--------------------| -------- |---------|
| by    | query | id/symbol          | Yes | string  |
| value | query | value of id/symbol | Yes | string |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Asset](#assets) |

### Get assets
```
GET /api/v1/assets
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| offset | query | offset, min 0 and max 100000 | Yes | integer |
| limit | query | limit, min 1 and max 100 | Yes | integer |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Assets](#assets) |


### Get block by its height or commitment
```
GET /api/v1/block
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| by | query | height/commitment | Yes | string |
| value | query | value of height/commitment | Yes | string |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Block](#block) |

### Get transactions in a block

```GET /api/v1/blockTxs```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| by | query | block_height/block_commitment | Yes | string |
| value | query | value of block_height/block_commitment | Yes | string |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Txs](#txs) |

### Get blocks

```
GET /api/v1/blocks
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| offset | query | offset, min 0 and max 100000 | Yes | integer |
| limit | query | limit, min 1 and max 100 | Yes | integer |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Blocks](#blocks) |

### GET current Height
```
GET /api/v1/currentHeight
```

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [CurrentHeight](#currentheight) |

### Get gas account, who will charge gas fees for transactions
```
GET /api/v1/gasAccount
```

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [GasAccount](#gasaccount) |

### Get gas fee amount for using a specific asset as gas asset
```
GET /api/v1/gasFee
```

##### Parameters:

| Name     | Located in | Description | Required | Schema |
|----------| ---------- |-------------| -------- | ---- |
| asset_id | query | id of asset | Yes | integer |
| tx_type  | query | type of tx  | Yes | integer |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [GasFee](#gasfee) |

### Get supported gas fee assets

```
GET /api/v1/gasFeeAssets
```

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [GasFeeAssets](#gasfeeassets) |

### Get zkbnb general info
Get zkbnb general info, including contract address, and count of transactions and active users
```
GET /api/v1/layer2BasicInfo
```

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Layer2BasicInfo](#layer2basicinfo) |

### Get max nft offer id for a specific account
```
GET /api/v1/maxOfferId
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_index | query | index of account | Yes | integer |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [MaxOfferId](#maxofferid) |

### Get pending transactions
```
GET /api/v1/pendingTxs
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| offset | query | offset, min 0 and max 100000 | Yes | integer |
| limit | query | limit, min 1 and max 100 | Yes | integer |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Txs](#txs) |

### Get executed transactions
```
GET /api/v1/executedTxs
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| offset | query | offset, min 0 and max 100000 | Yes | integer |
| limit | query | limit, min 1 and max 100 | Yes | integer |
| from_hash | query | start from the hash tx | No | string |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Txs](#txs) |


### Get next nonce
```
GET /api/v1/nextNonce
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account_index | query | index of account | Yes | integer |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [NextNonce](#nextnonce) |

### Search with a specific keyword
```
GET /api/v1/search
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| keyword | query | keyword | Yes | string |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Search](#search) |

### Get transaction by hash
```
GET /api/v1/tx
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| hash | query | hash of tx | Yes | string |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [EnrichedTx](#enrichedtx) |

### Get transactions
```
GET /api/v1/txs
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| offset | query | offset, min 0 and max 100000 | Yes | integer |
| limit | query | limit, min 1 and max 100 | Yes | integer |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [Txs](#txs) |

### Send raw transaction
```
POST /api/v1/sendTx
```

##### Parameters:

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | raw tx | Yes | [ReqSendTx](#reqsendtx) |

##### Response:

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [TxHash](#txhash) |

## Models

### Account

| Name               | Type                              | Description | Required |
|--------------------|-----------------------------------| ----------- | -------- |
| status             | integer                           |  | Yes |
| index              | long                              |  | Yes |
| name               | string                            |  | Yes |
| pk                 | string                            |  | Yes |
| nonce              | long                              |  | Yes |
| assets             | [ [AccountAsset](#accountasset) ] |  | Yes |
| total_asset_value  | string                            |  | Yes |

### AccountAsset

| Name    | Type | Description | Required |
|---------| ---- | ----------- | -------- |
| id      | integer |  | Yes |
| name    | string |  | Yes |
| balance | string |  | Yes |
| price   | string |  | Yes |

### Accounts

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| total | integer |  | Yes |
| accounts | [ [SimpleAccount](#simpleaccount) ] |  | Yes |

### Asset

| Name         | Type    | Description | Required |
|--------------|---------| ----------- | -------- |
| id           | integer |  | Yes |
| name         | string  |  | Yes |
| decimals     | integer |  | Yes |
| symbol       | string  |  | Yes |
| address      | string  |  | Yes |
| price        | string  |  | Yes |
| is_gas_asset | integer |  | Yes |
| icon         | string  |  | Yes |

### Assets

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| total | integer |  | Yes |
| assets | [ [Asset](#asset) ] |  | Yes |

### Block

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| commitment | string |  | Yes |
| height | long |  | Yes |
| state_root | string |  | Yes |
| priority_operations | long |  | Yes |
| pending_on_chain_operations_hash | string |  | Yes |
| pending_on_chain_operations_pub_data | string |  | Yes |
| committed_tx_hash | string |  | Yes |
| committed_at | long |  | Yes |
| verified_tx_hash | string |  | Yes |
| verified_at | long |  | Yes |
| txs | [ [Tx](#tx) ] |  | Yes |
| status | long |  | Yes |
| size | long |  | Yes |

### Blocks

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| total | integer |  | Yes |
| blocks | [ [Block](#block) ] |  | Yes |

### ContractAddress

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string |  | Yes |
| address | string |  | Yes |

### CurrentHeight

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| height | long |  | Yes |

### EnrichedTx

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
|  | [Tx](#tx) |  | No |
| committed_at | long |  | Yes |
| verified_at | long |  | Yes |
| executed_at | long |  | Yes |

### GasAccount

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | long |  | Yes |
| index | long |  | Yes |
| name | string |  | Yes |

### GasFee

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| gas_fee | string |  | Yes |

### GasFeeAssets

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assets | [ [Asset](#asset) ] |  | Yes |

### Layer2BasicInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| block_committed | long |  | Yes |
| block_verified | long |  | Yes |
| total_transaction_count | long |  | Yes |
| yesterday_transaction_count | long |  | Yes |
| today_transaction_count | long |  | Yes |
| yesterday_active_user_count | long |  | Yes |
| today_active_user_count | long |  | Yes |
| contract_addresses | [ [ContractAddress](#contractaddress) ] |  | Yes |

### MaxOfferId

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offer_id | long |  | Yes |

### NextNonce

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| nonce | long |  | Yes |

### Nft

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| index | long |  | Yes |
| creator_account_index | long |  | Yes |
| owner_account_index | long |  | Yes |
| content_hash | string |  | Yes |
| l1_address | string |  | Yes |
| l1_token_id | string |  | Yes |
| creator_treasury_rate | long |  | Yes |
| collection_id | long |  | Yes |

### Nfts

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| total | long |  | Yes |
| nfts | [ [Nft](#nft) ] |  | Yes |

### ReqGetAccount

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| by | string |  | Yes |
| value | string |  | Yes |

### ReqGetAccountPendingTxs

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| by | string |  | Yes |
| value | string |  | Yes |

### ReqGetAccountNfts

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| by | string |  | Yes |
| value | string |  | Yes |
| offset | [uint16](#uint16) |  | Yes |
| limit | [uint16](#uint16) |  | Yes |

### ReqGetAccountTxs

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| by | string |  | Yes |
| value | string |  | Yes |
| offset | [uint16](#uint16) |  | Yes |
| limit | [uint16](#uint16) |  | Yes |

### ReqGetAsset

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| by | string |  | Yes |
| value | string |  | Yes |

### ReqGetBlock

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| by | string |  | Yes |
| value | string |  | Yes |

### ReqGetBlockTxs

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| by | string |  | Yes |
| value | string |  | Yes |

### ReqGetGasFee

| Name     | Type | Description | Required |
|----------| ---- | ----------- | -------- |
| asset_id | integer |  | Yes |
| tx_type       | integer |  | Yes |

### ReqGetMaxOfferId

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| account_index | integer |  | Yes |

### ReqGetNextNonce

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| account_index | integer |  | Yes |

### ReqGetRange

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | integer |  | Yes |
| limit | integer |  | Yes |

### ReqGetTx

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| hash | string |  | Yes |

### ReqSearch

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| keyword | string |  | Yes |

### ReqSendTx

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| tx_type | integer |  | Yes |
| tx_info | string |  | Yes |

### Search

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data_type | integer | 2:account; 4:pk; 9:block; 10:tx | Yes |

### SimpleAccount

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| index | long |  | Yes |
| name | string |  | Yes |
| pk | string |  | Yes |

### Status

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | integer |  | Yes |
| network_id | integer |  | Yes |

### Tx

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| hash | string |  | Yes |
| type | long |  | Yes |
| amount | string |  | Yes |
| info | string |  | Yes |
| status | long |  | Yes |
| index | long |  | Yes |
| gas_fee_asset_id | long |  | Yes |
| gas_fee | string |  | Yes |
| nft_index | long |  | Yes |
| asset_id | long |  | Yes |
| asset_name | string |  | Yes |
| native_adress | string |  | Yes |
| extra_info | string |  | Yes |
| memo | string |  | Yes |
| account_index | long |  | Yes |
| account_name | string |  | Yes |
| nonce | long |  | Yes |
| expire_at | long |  | Yes |
| block_height | long |  | Yes |
| created_at | long |  | Yes |
| state_root | string |  | Yes |

### TxHash

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| tx_hash | string |  | Yes |

### Txs

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| total | integer |  | Yes |
| txs | [ [Tx](#tx) ] |  | Yes |
