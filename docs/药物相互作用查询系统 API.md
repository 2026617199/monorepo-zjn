---
title: 药物相互作用查询系统 API
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.30"

---

# 药物相互作用查询系统 API

API文档 - 药物相互作用查询系统后端接口

Base URLs:

# Authentication

# Drugs

## GET 获取药物列表

GET /api/drugs

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer| 否 |页码|
|limit|query|integer| 否 |每页数量|

> 返回示例

> 200 Response

```json
{
  "success": true,
  "data": [
    {
      "_id": "6938eefeadbe479a1596e84c",
      "name": "999感冒灵",
      "genericName": "复方感冒灵颗粒",
      "description": "999感冒灵是一种常用的非处方感冒药，主要成分为中药提取物（如金银花、野菊花、三叉苦等）和西药成分（如对乙酰氨基酚、马来酸氯苯那敏、咖啡因）。它主要用于缓解普通感冒及流行性感冒引起的症状，如发热、头痛、鼻塞、流涕、咽痛等。该药物通过中西药结合的方式，发挥解热镇痛、抗过敏和缓解症状的作用。",
      "category": "非处方药（OTC），中成药复方制剂",
      "sideEffects": [
        "嗜睡、乏力、头晕",
        "恶心、胃部不适",
        "皮疹、过敏反应",
        "长期或过量使用可能导致肝损伤（由于对乙酰氨基酚成分）"
      ],
      "contraindications": [
        "对本品任何成分过敏者禁用",
        "严重肝肾功能不全者禁用",
        "孕妇及哺乳期妇女慎用或禁用（建议咨询医生）",
        "服用期间禁止饮酒或含酒精饮料",
        "与其他含对乙酰氨基酚的药物同用需谨慎，以避免过量"
      ],
      "dosage": "口服，成人一次1袋（10克），一日3次。用开水冲服。儿童、老年人或特殊人群应在医生指导下使用，或参考说明书调整剂量。症状缓解后应停药，不建议长期使用。如果症状持续或加重，请及时就医。",
      "aiAnalysis": "{\"name\":\"999感冒灵\",\"genericName\":\"复方感冒灵颗粒\",\"category\":\"非处方药（OTC），中成药复方制剂\",\"description\":\"999感冒灵是一种常用的非处方感冒药，主要成分为中药提取物（如金银花、野菊花、三叉苦等）和西药成分（如对乙酰氨基酚、马来酸氯苯那敏、咖啡因）。它主要用于缓解普通感冒及流行性感冒引起的症状，如发热、头痛、鼻塞、流涕、咽痛等。该药物通过中西药结合的方式，发挥解热镇痛、抗过敏和缓解症状的作用。\",\"sideEffects\":[\"嗜睡、乏力、头晕\",\"恶心、胃部不适\",\"皮疹、过敏反应\",\"长期或过量使用可能导致肝损伤（由于对乙酰氨基酚成分）\"],\"contraindications\":[\"对本品任何成分过敏者禁用\",\"严重肝肾功能不全者禁用\",\"孕妇及哺乳期妇女慎用或禁用（建议咨询医生）\",\"服用期间禁止饮酒或含酒精饮料\",\"与其他含对乙酰氨基酚的药物同用需谨慎，以避免过量\"],\"dosage\":\"口服，成人一次1袋（10克），一日3次。用开水冲服。儿童、老年人或特殊人群应在医生指导下使用，或参考说明书调整剂量。症状缓解后应停药，不建议长期使用。如果症状持续或加重，请及时就医。\"}",
      "source": "ai",
      "createdAt": "2025-12-10T03:54:38.845Z",
      "updatedAt": "2025-12-10T03:54:38.845Z"
    },
    {
      "_id": "6938e9ebadbe479a1596e839",
      "name": "测试药物",
      "genericName": "测试药物",
      "description": "由于“测试药物”是一个通用名称，没有具体的药物信息。在真实场景中，药物信息应基于具体的药物名称（如阿司匹林、青霉素等）来提供。请提供具体的药物名称以获取准确信息。",
      "category": "未知",
      "sideEffects": [
        "未知"
      ],
      "contraindications": [
        "未知"
      ],
      "dosage": "未知",
      "aiAnalysis": "{\"name\":\"测试药物\",\"genericName\":\"测试药物\",\"category\":\"未知\",\"description\":\"由于“测试药物”是一个通用名称，没有具体的药物信息。在真实场景中，药物信息应基于具体的药物名称（如阿司匹林、青霉素等）来提供。请提供具体的药物名称以获取准确信息。\",\"sideEffects\":[\"未知\"],\"contraindications\":[\"未知\"],\"dosage\":\"未知\"}",
      "source": "ai",
      "createdAt": "2025-12-10T03:32:59.528Z",
      "updatedAt": "2025-12-10T03:32:59.528Z"
    },
    {
      "_id": "6938dc0ce1ed2492e2ef26b8",
      "name": "艾司唑仑",
      "genericName": "Estazolam",
      "description": "苯二氮䓬类药物，用于失眠症的短期治疗",
      "category": "镇静催眠药",
      "sideEffects": [
        "嗜睡",
        "头晕",
        "依赖性"
      ],
      "contraindications": [
        "重症肌无力",
        "急性闭角型青光眼",
        "严重呼吸功能不全"
      ],
      "dosage": "成人：睡前1-2mg",
      "source": "manual",
      "createdAt": "2025-12-10T02:33:48.284Z",
      "updatedAt": "2025-12-10T02:33:48.284Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 3,
    "total": 19,
    "totalPages": 7
  },
  "timestamp": 1765345264998
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功返回药物列表|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|服务器错误|None|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|boolean|true|none|成功状态|表示API请求是否成功|
|» data|[object]|true|none|数据|药品数据列表|
|»» _id|string|true|none|唯一标识符|药品记录的唯一ID|
|»» name|string|true|none|药品名称|药品的品牌名或商品名|
|»» genericName|string|true|none|通用名称|药品的化学通用名|
|»» description|string|true|none|描述|药品的详细说明|
|»» category|string|true|none|类别|药品的分类（如抗生素、止痛药等）|
|»» sideEffects|[string]|true|none|副作用|药品可能产生的副作用列表|
|»» contraindications|[string]|true|none|禁忌症|不应使用该药品的情况列表|
|»» dosage|string|true|none|剂量|推荐用法用量说明|
|»» aiAnalysis|string|true|none|AI分析|人工智能对药品的分析结果|
|»» source|string|true|none|来源|药品信息的来源|
|»» createdAt|string|true|none|创建时间|记录创建的时间戳|
|»» updatedAt|string|true|none|更新时间|记录最后更新的时间戳|
|» pagination|object|true|none|分页信息|分页相关的元数据|
|»» page|integer|true|none|当前页码|当前页数|
|»» limit|integer|true|none|每页数量|每页显示的记录数|
|»» total|integer|true|none|总记录数|所有记录的总数|
|»» totalPages|integer|true|none|总页数|根据总记录数和每页数量计算的总页数|
|» timestamp|integer|true|none|时间戳|API响应的时间戳|

## GET 搜索药物

GET /api/drugs/search

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|name|query|string| 是 |搜索关键词|

> 返回示例

> 成功返回搜索结果

```json
{
  "success": true,
  "data": [
    {
      "_id": "6938dc0ce1ed2492e2ef26b8",
      "name": "艾司唑仑",
      "genericName": "Estazolam",
      "description": "苯二氮䓬类药物，用于失眠症的短期治疗",
      "category": "镇静催眠药",
      "sideEffects": [
        "嗜睡",
        "头晕",
        "依赖性"
      ],
      "contraindications": [
        "重症肌无力",
        "急性闭角型青光眼",
        "严重呼吸功能不全"
      ],
      "dosage": "成人：睡前1-2mg",
      "source": "manual",
      "createdAt": "2025-12-10T02:33:48.284Z",
      "updatedAt": "2025-12-10T02:33:48.284Z"
    }
  ],
  "count": 1,
  "timestamp": 1765338667832
}
```

```json
{
  "success": true,
  "data": [
    {
      "_id": "6938dc0ce1ed2492e2ef26b8",
      "name": "艾司唑仑",
      "genericName": "Estazolam",
      "description": "苯二氮䓬类药物，用于失眠症的短期治疗",
      "category": "镇静催眠药",
      "sideEffects": [
        "嗜睡",
        "头晕",
        "依赖性"
      ],
      "contraindications": [
        "重症肌无力",
        "急性闭角型青光眼",
        "严重呼吸功能不全"
      ],
      "dosage": "成人：睡前1-2mg",
      "source": "manual",
      "createdAt": "2025-12-10T02:33:48.284Z",
      "updatedAt": "2025-12-10T02:33:48.284Z"
    }
  ],
  "count": 1,
  "timestamp": 1765345400011
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功返回搜索结果|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|请求参数错误|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|服务器错误|None|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|boolean|true|none|操作成功标志|表示API请求是否成功处理。true为成功，false为失败。|
|» data|[object]|true|none|药品数据列表|包含多个药品详细信息的数组。|
|»» _id|string|false|none|唯一标识符|药品在数据库中的唯一ID。|
|»» name|string|false|none|药品商品名|药品的市场销售名称。|
|»» genericName|string|false|none|药品通用名|药品的化学或通用名称。|
|»» description|string|false|none|药品描述|关于药品用途、作用等的详细说明。|
|»» category|string|false|none|药品类别|药品所属的治疗类别或分类。|
|»» sideEffects|[string]|false|none|副作用|服用此药品可能产生的不良反应列表。|
|»»» 副作用项|string|false|none|副作用项|一个具体的副作用描述。|
|»» contraindications|[string]|false|none|禁忌症|不应使用此药品的情况或条件列表。|
|»»» 禁忌症项|string|false|none|禁忌症项|一个具体的禁忌情况描述。|
|»» dosage|string|false|none|用法用量|药品的建议使用剂量和给药方式。|
|»» source|string|false|none|信息来源|药品数据的来源或参考出处。|
|»» createdAt|string|false|none|创建时间|此药品记录在系统中创建的时间戳。|
|»» updatedAt|string|false|none|更新时间|此药品记录最后一次修改的时间戳。|
|» count|integer|true|none|数据总数|本次响应中返回的药品记录总数。|
|» timestamp|integer|true|none|响应时间戳|API服务器生成此响应时的时间戳（通常为Unix时间戳）。|

## GET 获取药物详情

GET /api/drugs/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |药物ID|

> 返回示例

> 成功返回药物详情

```json
{
  "success": true,
  "data": {
    "_id": "6938dc0ce1ed2492e2ef26b8",
    "name": "艾司唑仑",
    "genericName": "Estazolam",
    "description": "苯二氮䓬类药物，用于失眠症的短期治疗",
    "category": "镇静催眠药",
    "sideEffects": [
      "嗜睡",
      "头晕",
      "依赖性"
    ],
    "contraindications": [
      "重症肌无力",
      "急性闭角型青光眼",
      "严重呼吸功能不全"
    ],
    "dosage": "成人：睡前1-2mg",
    "source": "manual",
    "createdAt": "2025-12-10T02:33:48.284Z",
    "updatedAt": "2025-12-10T02:33:48.284Z"
  },
  "timestamp": 1765338367908
}
```

```json
{
  "success": true,
  "data": {
    "_id": "6938dc0ce1ed2492e2ef26b8",
    "name": "艾司唑仑",
    "genericName": "Estazolam",
    "description": "苯二氮䓬类药物，用于失眠症的短期治疗",
    "category": "镇静催眠药",
    "sideEffects": [
      "嗜睡",
      "头晕",
      "依赖性"
    ],
    "contraindications": [
      "重症肌无力",
      "急性闭角型青光眼",
      "严重呼吸功能不全"
    ],
    "dosage": "成人：睡前1-2mg",
    "source": "manual",
    "createdAt": "2025-12-10T02:33:48.284Z",
    "updatedAt": "2025-12-10T02:33:48.284Z"
  },
  "timestamp": 1765345501166
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功返回药物详情|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|药物不存在|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|服务器错误|None|

### 返回数据结构

状态码 **200**

*API响应*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|boolean|true|none|请求成功标志|指示API请求是否成功处理|
|» data|object|true|none|药品数据|包含药品详细信息的对象|
|»» _id|string|true|none|药品唯一标识符|药品在数据库中的唯一ID|
|»» name|string|true|none|药品商品名|药品的市场品牌名称|
|»» genericName|string|true|none|药品通用名|药品的化学通用名称|
|»» description|string|true|none|药品描述|药品的详细说明和用途介绍|
|»» category|string|true|none|药品类别|药品所属的治疗类别或分类|
|»» sideEffects|[string]|true|none|副作用|药品可能产生的副作用列表|
|»» contraindications|[string]|true|none|禁忌症|不应使用该药品的情况列表|
|»» dosage|string|true|none|用法用量|药品的推荐使用剂量和用法说明|
|»» source|string|true|none|信息来源|药品信息的来源或参考依据|
|»» createdAt|string|true|none|创建时间|药品记录在系统中的创建时间|
|»» updatedAt|string|true|none|更新时间|药品记录的最后更新时间|
|» timestamp|integer|true|none|时间戳|API响应生成的时间戳（Unix时间戳）|

## POST 保存药物到数据库

POST /api/drugs

> Body 请求参数

```json
{
  "name": "阿莫西林",
  "genericName": "Amoxicillin",
  "description": "青霉素类抗生素，用于治疗细菌感染",
  "category": "抗生素",
  "sideEffects": ["过敏反应", "腹泻", "恶心"],
  "contraindications": ["青霉素过敏者禁用"],
  "dosage": "成人：每次0.5g，每日3次",
  "source": "manual"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 是 |none|
|» name|body|string| 是 |药物名称|
|» genericName|body|string| 否 |通用名|
|» description|body|string| 是 |描述|
|» category|body|string| 是 |分类|
|» sideEffects|body|[string]| 否 |副作用|
|» contraindications|body|[string]| 否 |禁忌症|
|» dosage|body|string| 否 |用法用量|
|» aiAnalysis|body|string| 否 |AI分析结果|
|» source|body|string| 否 |数据来源（manual/ai）|

> 返回示例

> 成功保存药物

```json
{
  "success": true,
  "data": {
    "_id": "6938dc0ce1ed2492e2ef26b8",
    "name": "阿莫西林",
    "genericName": "Amoxicillin",
    "description": "青霉素类抗生素，用于治疗细菌感染",
    "category": "抗生素",
    "sideEffects": ["过敏反应", "腹泻", "恶心"],
    "contraindications": ["青霉素过敏者禁用"],
    "dosage": "成人：每次0.5g，每日3次",
    "source": "manual",
    "createdAt": "2025-12-10T02:33:48.284Z",
    "updatedAt": "2025-12-10T02:33:48.284Z"
  },
  "timestamp": 1765338367908
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|成功保存药物|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|请求参数错误|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|药物已存在|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|服务器错误|None|

### 返回数据结构

状态码 **201**

*药品信息响应*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|boolean|true|none|请求成功标志|指示API请求是否成功处理|
|» data|object|true|none|药品数据|包含药品详细信息的对象|
|»» _id|string|true|none|药品唯一标识符|药品在数据库中的唯一ID|
|»» name|string|true|none|药品商品名|药品的市场品牌名称|
|»» genericName|string|false|none|药品通用名|药品的化学通用名称|
|»» description|string|true|none|药品描述|药品的详细说明和用途介绍|
|»» category|string|true|none|药品类别|药品所属的治疗类别或分类|
|»» sideEffects|[string]|false|none|副作用|药品可能产生的副作用列表|
|»» contraindications|[string]|false|none|禁忌症|不应使用该药品的情况列表|
|»» dosage|string|false|none|用法用量|药品的推荐使用剂量和用法说明|
|»» source|string|false|none|信息来源|药品信息的来源（manual/ai）|
|»» createdAt|string|true|none|创建时间|药品记录在系统中的创建时间|
|»» updatedAt|string|true|none|更新时间|药品记录的最后更新时间|
|» timestamp|integer|true|none|时间戳|API响应生成的时间戳（Unix时间戳）|

## POST AI分析药物

POST

> Body 请求参数

```json
{
  "name": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 是 |none|
|» name|body|string| 是 |药物名称|

> 返回示例

> 成功返回药物分析结果

```json
{
  "success": true,
  "data": {
    "name": "999感冒灵",
    "genericName": "复方感冒灵颗粒",
    "description": "999感冒灵是一种常用的非处方感冒药，主要成分为中药提取物（如金银花、野菊花、三叉苦等）和西药成分（如对乙酰氨基酚、马来酸氯苯那敏、咖啡因）。它主要用于缓解普通感冒及流行性感冒引起的症状，如发热、头痛、鼻塞、流涕、咽痛等。该药物通过中西药结合的方式，发挥解热镇痛、抗过敏和缓解症状的作用。",
    "category": "非处方药（OTC），中成药复方制剂",
    "sideEffects": [
      "嗜睡、乏力、头晕",
      "恶心、胃部不适",
      "皮疹、过敏反应",
      "长期或过量使用可能导致肝损伤（由于对乙酰氨基酚成分）"
    ],
    "contraindications": [
      "对本品任何成分过敏者禁用",
      "严重肝肾功能不全者禁用",
      "孕妇及哺乳期妇女慎用或禁用（建议咨询医生）",
      "服用期间禁止饮酒或含酒精饮料",
      "与其他含对乙酰氨基酚的药物同用需谨慎，以避免过量"
    ],
    "dosage": "口服，成人一次1袋（10克），一日3次。用开水冲服。儿童、老年人或特殊人群应在医生指导下使用，或参考说明书调整剂量。症状缓解后应停药，不建议长期使用。如果症状持续或加重，请及时就医。",
    "aiAnalysis": "{\"name\":\"999感冒灵\",\"genericName\":\"复方感冒灵颗粒\",\"category\":\"非处方药（OTC），中成药复方制剂\",\"description\":\"999感冒灵是一种常用的非处方感冒药，主要成分为中药提取物（如金银花、野菊花、三叉苦等）和西药成分（如对乙酰氨基酚、马来酸氯苯那敏、咖啡因）。它主要用于缓解普通感冒及流行性感冒引起的症状，如发热、头痛、鼻塞、流涕、咽痛等。该药物通过中西药结合的方式，发挥解热镇痛、抗过敏和缓解症状的作用。\",\"sideEffects\":[\"嗜睡、乏力、头晕\",\"恶心、胃部不适\",\"皮疹、过敏反应\",\"长期或过量使用可能导致肝损伤（由于对乙酰氨基酚成分）\"],\"contraindications\":[\"对本品任何成分过敏者禁用\",\"严重肝肾功能不全者禁用\",\"孕妇及哺乳期妇女慎用或禁用（建议咨询医生）\",\"服用期间禁止饮酒或含酒精饮料\",\"与其他含对乙酰氨基酚的药物同用需谨慎，以避免过量\"],\"dosage\":\"口服，成人一次1袋（10克），一日3次。用开水冲服。儿童、老年人或特殊人群应在医生指导下使用，或参考说明书调整剂量。症状缓解后应停药，不建议长期使用。如果症状持续或加重，请及时就医。\"}",
    "source": "ai",
    "_id": "6938eefeadbe479a1596e84c",
    "createdAt": "2025-12-10T03:54:38.845Z",
    "updatedAt": "2025-12-10T03:54:38.845Z"
  },
  "timestamp": 1765338878967
}
```

```json
{
  "success": true,
  "data": {
    "name": "花露水",
    "genericName": "花露水",
    "description": "花露水是一种常见的外用液体产品，主要成分为乙醇、香精、薄荷脑、冰片等，具有驱蚊、止痒、清凉提神的作用。它不是药品，而是属于日化用品或卫生用品，通常用于皮肤表面，以缓解蚊虫叮咬引起的瘙痒或提供清凉感。",
    "category": "外用驱蚊止痒产品",
    "sideEffects": [
      "皮肤刺激或过敏反应（如红肿、瘙痒）",
      "误入眼睛可能引起刺激",
      "过量使用可能导致皮肤干燥或不适"
    ],
    "contraindications": [
      "对酒精或成分过敏者禁用",
      "破损皮肤或伤口处避免使用",
      "婴幼儿慎用或避免大面积使用"
    ],
    "dosage": "外用，取适量涂抹于皮肤表面，避免接触眼睛和黏膜。建议每日使用1-2次，或根据需要重复使用，但不宜过量。",
    "aiAnalysis": "{\"name\":\"花露水\",\"genericName\":\"花露水\",\"category\":\"外用驱蚊止痒产品\",\"description\":\"花露水是一种常见的外用液体产品，主要成分为乙醇、香精、薄荷脑、冰片等，具有驱蚊、止痒、清凉提神的作用。它不是药品，而是属于日化用品或卫生用品，通常用于皮肤表面，以缓解蚊虫叮咬引起的瘙痒或提供清凉感。\",\"sideEffects\":[\"皮肤刺激或过敏反应（如红肿、瘙痒）\",\"误入眼睛可能引起刺激\",\"过量使用可能导致皮肤干燥或不适\"],\"contraindications\":[\"对酒精或成分过敏者禁用\",\"破损皮肤或伤口处避免使用\",\"婴幼儿慎用或避免大面积使用\"],\"dosage\":\"外用，取适量涂抹于皮肤表面，避免接触眼睛和黏膜。建议每日使用1-2次，或根据需要重复使用，但不宜过量。\"}",
    "source": "ai",
    "_id": "6939095101520c8c8d86a057",
    "createdAt": "2025-12-10T05:46:57.898Z",
    "updatedAt": "2025-12-10T05:46:57.898Z"
  },
  "timestamp": 1765345617919
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功返回药物分析结果|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|请求参数错误|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|服务器错误|None|
|502|[Bad Gateway](https://tools.ietf.org/html/rfc7231#section-6.6.3)|AI接口调用失败|None|

### 返回数据结构

状态码 **200**

*药品信息响应*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|boolean|true|none|成功状态|表示请求是否成功处理|
|» data|object|true|none|药品数据|药品的详细信息数据|
|»» name|string|true|none|药品名称|药品的商品名或品牌名|
|»» genericName|string|true|none|通用名称|药品的化学通用名或国际非专利名称|
|»» description|string|true|none|描述|药品的详细说明和用途介绍|
|»» category|string|true|none|药品类别|药品所属的治疗类别或药理分类|
|»» sideEffects|[string]|true|none|副作用|可能出现的副作用列表|
|»» contraindications|[string]|true|none|禁忌症|不应使用该药品的情况列表|
|»» dosage|string|true|none|剂量说明|推荐用法用量说明|
|»» aiAnalysis|string|true|none|AI分析|人工智能对药品信息的分析结果|
|»» source|string|true|none|数据来源|药品信息的来源或出处|
|»» _id|string|true|none|唯一标识符|药品记录的唯一标识符|
|»» createdAt|string|true|none|创建时间|记录创建的时间戳|
|»» updatedAt|string|true|none|更新时间|记录最后更新的时间戳|
|» timestamp|integer|true|none|时间戳|响应生成的时间戳|

# Interactions

## POST 检测药物相互作用

POST /api/interactions/check

> Body 请求参数

```json
{
  "drugIds": [
    "507f1f77bcf86cd799439011",
    "507f1f77bcf86cd799439012"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 是 |none|
|» drugIds|body|[string]| 是 |药物ID数组（至少2个）|

> 返回示例

> 200 Response

```json
{
  "success": true,
  "data": {
    "interactions": [
      {
        "drug1Id": "string",
        "drug2Id": "string",
        "drug1Name": "string",
        "drug2Name": "string",
        "interactionType": "string",
        "severity": "string",
        "description": "string",
        "recommendation": "string",
        "source": "string",
        "_id": "string",
        "createdAt": "string",
        "updatedAt": "string"
      }
    ],
    "riskLevel": "string",
    "source": "string",
    "drugCount": 0,
    "interactionCount": 0
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功返回检测结果|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|请求参数错误|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|服务器错误|None|
|502|[Bad Gateway](https://tools.ietf.org/html/rfc7231#section-6.6.3)|AI接口调用失败|None|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|boolean|true|none|成功状态|表示API请求是否成功处理|
|» data|object|true|none|响应数据|包含药物相互作用分析结果的主要数据|
|»» interactions|[object]|true|none|相互作用列表|检测到的药物相互作用详细列表|
|»»» 相互作用详情|object|false|none|相互作用详情|单个药物相互作用的详细信息|
|»»»» drug1Id|string|false|none|药物1标识符|第一种药物的唯一标识符|
|»»»» drug2Id|string|false|none|药物2标识符|第二种药物的唯一标识符|
|»»»» drug1Name|string|false|none|药物1名称|第一种药物的通用名称|
|»»»» drug2Name|string|false|none|药物2名称|第二种药物的通用名称|
|»»»» interactionType|string|false|none|相互作用类型|药物相互作用的分类类型|
|»»»» severity|string|false|none|严重程度|相互作用的严重性等级|
|»»»» description|string|false|none|描述|相互作用的详细说明|
|»»»» recommendation|string|false|none|建议|针对该相互作用的处理建议|
|»»»» source|string|false|none|数据来源|相互作用信息的来源数据库|
|»»»» _id|string|false|none|记录标识符|相互作用记录的唯一标识符|
|»»»» createdAt|string|false|none|创建时间|记录创建的时间戳|
|»»»» updatedAt|string|false|none|更新时间|记录最后更新的时间戳|
|»» riskLevel|string|true|none|总体风险等级|基于所有相互作用的总体风险评估等级|
|»» source|string|true|none|分析来源|相互作用分析的数据来源|
|»» drugCount|integer|true|none|药物数量|参与分析的总药物数量|
|»» interactionCount|integer|true|none|相互作用数量|检测到的相互作用总数|
|» timestamp|integer|true|none|时间戳|API响应生成的时间戳|

## GET 获取相互作用详情

GET /api/interactions/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |相互作用ID|

> 返回示例

> 200 Response

```json
{
  "success": true,
  "data": {
    "_id": "6938dc0ce1ed2492e2ef26e5",
    "drug1Id": "6938dc0ce1ed2492e2ef26b8",
    "drug2Id": "6938dc0ce1ed2492e2ef26b5",
    "drug1Name": "艾司唑仑",
    "drug2Name": "地西泮",
    "interactionType": "药效增强",
    "severity": "medium",
    "description": "两种苯二氮䓬类药物联用会增强镇静作用和依赖风险",
    "recommendation": "不建议联用，选择其中一种即可",
    "source": "database",
    "createdAt": "2025-12-10T02:33:48.712Z",
    "updatedAt": "2025-12-10T02:33:48.712Z"
  },
  "timestamp": 1765346143022
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功返回相互作用详情|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|相互作用不存在|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|服务器错误|None|

### 返回数据结构

状态码 **200**

*药物交互响应*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|boolean|true|none|请求成功|表示API请求是否成功处理|
|» data|object|true|none|交互数据|包含药物交互详细信息的对象|
|»» _id|string|true|none|交互记录ID|药物交互记录的唯一标识符|
|»» drug1Id|string|true|none|药物1ID|第一种药物的唯一标识符|
|»» drug2Id|string|true|none|药物2ID|第二种药物的唯一标识符|
|»» drug1Name|string|true|none|药物1名称|第一种药物的名称|
|»» drug2Name|string|true|none|药物2名称|第二种药物的名称|
|»» interactionType|string|true|none|交互类型|药物交互的类型（如药效增强、药效减弱等）|
|»» severity|string|true|none|严重程度|交互的严重程度（如轻度、中度、重度）|
|»» description|string|true|none|交互描述|药物交互的详细描述|
|»» recommendation|string|true|none|建议|针对该交互的临床建议|
|»» source|string|true|none|数据来源|交互信息的来源（如数据库、文献等）|
|»» createdAt|string|true|none|创建时间|记录创建的时间戳|
|»» updatedAt|string|true|none|更新时间|记录最后更新的时间戳|
|» timestamp|integer|true|none|时间戳|API响应生成的时间戳|

# Graph

## GET 获取药物关系图谱数据

GET /api/drugs/graph

获取药物关系图谱的节点和边数据，可选择筛选特定药物及其关联

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|drugId|query|string| 否 |可选的药物ID，用于筛选特定药物的关系|

> 返回示例

> 成功返回图谱数据

```json
{
  "success": true,
  "data": {
    "nodes": [
      {
        "id": "6938dc0be1ed2492e2ef2691",
        "name": "硝苯地平",
        "category": "降压药",
        "value": 10
      },
      {
        "id": "6938dc0be1ed2492e2ef2694",
        "name": "美托洛尔",
        "category": "降压药",
        "value": 10
      }
    ],
    "edges": [
      {
        "source": "6938dc0be1ed2492e2ef2694",
        "target": "6938dc0be1ed2492e2ef2691",
        "value": 2,
        "severity": "medium"
      }
    ]
  },
  "timestamp": 1765339049551
}
```

```json
{
  "success": true,
  "data": {
    "nodes": [
      {
        "id": "6938dc0be1ed2492e2ef268e",
        "name": "氨氯地平",
        "category": "降压药",
        "value": 13,
        "source": "manual",
        "description": "钙通道阻滞剂，用于治疗高血压和心绞痛"
      },
      {
        "id": "6938dc0ce1ed2492e2ef26a9",
        "name": "辛伐他汀",
        "category": "调脂药",
        "value": 13,
        "source": "manual",
        "description": "他汀类降脂药，用于治疗高胆固醇血症"
      },
      {
        "id": "6938dc0ce1ed2492e2ef26ac",
        "name": "阿托伐他汀",
        "category": "调脂药",
        "value": 13,
        "source": "manual",
        "description": "他汀类降脂药，用于治疗高胆固醇血症和预防心血管疾病"
      }
    ],
    "edges": [
      {
        "source": "6938dc0be1ed2492e2ef268e",
        "target": "6938dc0ce1ed2492e2ef26a9",
        "value": 3,
        "severity": "medium",
        "interactionType": "药效增强",
        "description": "氨氯地平可能增加辛伐他汀的血药浓度，增加肌病风险"
      },
      {
        "source": "6938dc0ce1ed2492e2ef26ac",
        "target": "6938dc0be1ed2492e2ef268e",
        "value": 1,
        "severity": "low",
        "interactionType": "药效增强",
        "description": "氨氯地平可能轻度增加阿托伐他汀的血药浓度"
      }
    ]
  },
  "timestamp": 1765346725087
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功返回图谱数据|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|指定的药物不存在|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|服务器错误|None|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|boolean|true|none|成功状态|表示请求是否成功处理|
|» data|object|true|none|数据|包含节点和边的核心数据|
|»» nodes|[object]|true|none|节点列表|图中所有节点的集合|
|»»» id|string|true|none|节点ID|节点的唯一标识符|
|»»» name|string|true|none|节点名称|节点的显示名称|
|»»» category|string|true|none|节点类别|节点所属的分类|
|»»» value|integer|true|none|节点值|节点的数值权重|
|»»» source|string|true|none|数据来源|节点数据的来源信息|
|»»» description|string|true|none|节点描述|节点的详细说明|
|»» edges|[object]|true|none|边列表|图中所有边的集合|
|»»» source|string|true|none|源节点|边的起始节点ID|
|»»» target|string|true|none|目标节点|边的目标节点ID|
|»»» value|integer|true|none|边值|边的数值权重|
|»»» severity|string|true|none|严重程度|边所代表关系的严重程度|
|»»» interactionType|string|true|none|交互类型|节点之间的交互类型|
|»»» description|string|true|none|边描述|边的详细说明|
|» timestamp|integer|true|none|时间戳|数据生成的时间戳|

## GET 获取图谱统计信息

GET /api/drugs/graph/stats

获取药物图谱的整体统计信息，包括药物总数、相互作用总数和严重程度分布

> 返回示例

> 200 Response

```json
{
  "success": true,
  "data": {
    "totalDrugs": 20,
    "totalInteractions": 13,
    "severityDistribution": {
      "low": 5,
      "high": 3,
      "medium": 5
    }
  },
  "timestamp": 1765346278043
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功获取统计信息|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|服务器内部错误|None|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» data|object|true|none||none|
|»» totalDrugs|integer|true|none||none|
|»» totalInteractions|integer|true|none||none|
|»» severityDistribution|object|true|none||none|
|»»» low|integer|true|none||none|
|»»» high|integer|true|none||none|
|»»» medium|integer|true|none||none|
|» timestamp|integer|true|none||none|

## GET 获取药物的相互作用统计

GET /api/drugs/{drugId}/interactions/stats

获取指定药物的相互作用统计信息，包括总数和各严重程度的数量

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|drugId|path|string| 是 |药物ID|

> 返回示例

> 200 Response

```json
{
  "success": true,
  "data": {
    "drugId": "6938dc0be1ed2492e2ef268b",
    "drugName": "头孢克肟",
    "totalInteractions": 1,
    "severityCounts": {
      "high": 0,
      "medium": 0,
      "low": 1
    },
    "highRiskCount": 0,
    "mediumRiskCount": 0,
    "lowRiskCount": 1
  },
  "timestamp": 1765346437659
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功获取统计信息|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|请求参数错误|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|药物不存在|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|服务器内部错误|None|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|boolean|true|none|请求成功状态|表示API请求是否成功处理|
|» data|object|true|none|药品相互作用数据|包含药品相互作用的核心数据|
|»» drugId|string|true|none|药品ID|药品的唯一标识符|
|»» drugName|string|true|none|药品名称|药品的通用名称|
|»» totalInteractions|integer|true|none|总相互作用数|该药品与其他药物的总相互作用数量|
|»» severityCounts|object|true|none|严重程度计数|按严重程度分类的相互作用数量统计|
|»»» high|integer|true|none|高风险数量|高风险相互作用的数量|
|»»» medium|integer|true|none|中风险数量|中风险相互作用的数量|
|»»» low|integer|true|none|低风险数量|低风险相互作用的数量|
|»» highRiskCount|integer|true|none|高风险计数|高风险相互作用的单独计数|
|»» mediumRiskCount|integer|true|none|中风险计数|中风险相互作用的单独计数|
|»» lowRiskCount|integer|true|none|低风险计数|低风险相互作用的单独计数|
|» timestamp|integer|true|none|时间戳|API响应生成的时间戳（Unix时间戳格式）|

# 数据模型

