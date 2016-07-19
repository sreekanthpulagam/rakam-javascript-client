# rakam-client

RakamClient - JavaScript client for rakam-client
An analytics platform API that lets you create your own analytics services.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.5
- Package version: 0.5
- Build date: 2016-07-20T00:30:57.970+03:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install rakam-client --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/rakam-io/rakam-javascript-client
then install it via:

```shell
    npm install rakam-io/rakam-javascript-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var RakamClient = require('rakam-client');

var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix['master_key'] = "Token"

var api = new RakamClient.AdminApi()

var projectAddCustomFieldsToSchema = new RakamClient.ProjectAddCustomFieldsToSchema(); // {ProjectAddCustomFieldsToSchema} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addCustomFieldsToSchema(projectAddCustomFieldsToSchema, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://app.rakam.io/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*RakamClient.AdminApi* | [**addCustomFieldsToSchema**](docs/AdminApi.md#addCustomFieldsToSchema) | **POST** /project/schema/add/custom | Add fields to collections by transforming other schemas
*RakamClient.AdminApi* | [**addFieldsToSchema**](docs/AdminApi.md#addFieldsToSchema) | **POST** /project/schema/add | Add fields to collections
*RakamClient.AdminApi* | [**checkApiKeys**](docs/AdminApi.md#checkApiKeys) | **POST** /project/check-api-keys | Create API Keys
*RakamClient.AdminApi* | [**checkLockKey**](docs/AdminApi.md#checkLockKey) | **POST** /admin/lock_key | Check lock key
*RakamClient.AdminApi* | [**collections**](docs/AdminApi.md#collections) | **POST** /project/collection | Get collection names
*RakamClient.AdminApi* | [**createApiKeys**](docs/AdminApi.md#createApiKeys) | **POST** /project/create-api-keys | Create API Keys
*RakamClient.AdminApi* | [**createProject**](docs/AdminApi.md#createProject) | **POST** /project/create | Create project
*RakamClient.AdminApi* | [**deleteProject**](docs/AdminApi.md#deleteProject) | **DELETE** /project/delete | Delete project
*RakamClient.AdminApi* | [**getConfigurations**](docs/AdminApi.md#getConfigurations) | **GET** /admin/configurations | List installed modules
*RakamClient.AdminApi* | [**getProjects**](docs/AdminApi.md#getProjects) | **GET** /project/list | List created projects
*RakamClient.AdminApi* | [**getStats**](docs/AdminApi.md#getStats) | **POST** /project/stats | Get project stats
*RakamClient.AdminApi* | [**getTypes**](docs/AdminApi.md#getTypes) | **GET** /admin/types | Get types
*RakamClient.AdminApi* | [**revokeApiKeys**](docs/AdminApi.md#revokeApiKeys) | **DELETE** /project/revoke-api-keys | Revoke API Keys
*RakamClient.AdminApi* | [**schema**](docs/AdminApi.md#schema) | **POST** /project/schema | Get collection schema
*RakamClient.CollectApi* | [**batchEvents**](docs/CollectApi.md#batchEvents) | **POST** /event/batch | Collect multiple events
*RakamClient.CollectApi* | [**bulkEvents**](docs/CollectApi.md#bulkEvents) | **POST** /event/bulk | Collect Bulk events
*RakamClient.CollectApi* | [**bulkEventsRemote**](docs/CollectApi.md#bulkEventsRemote) | **POST** /event/bulk/remote | Collect bulk events from remote
*RakamClient.CollectApi* | [**collectEvent**](docs/CollectApi.md#collectEvent) | **POST** /event/collect | Collect event
*RakamClient.CollectApi* | [**commitBulkEvents**](docs/CollectApi.md#commitBulkEvents) | **POST** /event/bulk/commit | Commit Bulk events
*RakamClient.ContinuousqueryApi* | [**createQuery**](docs/ContinuousqueryApi.md#createQuery) | **POST** /continuous-query/create | Create stream
*RakamClient.ContinuousqueryApi* | [**deleteQuery**](docs/ContinuousqueryApi.md#deleteQuery) | **POST** /continuous-query/delete | Delete stream
*RakamClient.ContinuousqueryApi* | [**getQuery**](docs/ContinuousqueryApi.md#getQuery) | **POST** /continuous-query/get | Get continuous query
*RakamClient.ContinuousqueryApi* | [**getSchemaOfQuery**](docs/ContinuousqueryApi.md#getSchemaOfQuery) | **POST** /continuous-query/schema | Get query schema
*RakamClient.ContinuousqueryApi* | [**listQueries**](docs/ContinuousqueryApi.md#listQueries) | **POST** /continuous-query/list | List queries
*RakamClient.ContinuousqueryApi* | [**testQuery**](docs/ContinuousqueryApi.md#testQuery) | **POST** /continuous-query/test | Test continuous query
*RakamClient.EventexplorerApi* | [**analyzeEvents**](docs/EventexplorerApi.md#analyzeEvents) | **POST** /event-explorer/analyze | Perform simple query on event data
*RakamClient.EventexplorerApi* | [**createPrecomputedTable**](docs/EventexplorerApi.md#createPrecomputedTable) | **POST** /event-explorer/pre_calculate | Create Pre-computed table
*RakamClient.EventexplorerApi* | [**getEventStatistics**](docs/EventexplorerApi.md#getEventStatistics) | **POST** /event-explorer/statistics | Event statistics
*RakamClient.EventexplorerApi* | [**getExtraDimensions**](docs/EventexplorerApi.md#getExtraDimensions) | **GET** /event-explorer/extra_dimensions | Event statistics
*RakamClient.FunnelApi* | [**analyzeFunnel**](docs/FunnelApi.md#analyzeFunnel) | **POST** /funnel/analyze | Execute query
*RakamClient.MaterializedviewApi* | [**createView**](docs/MaterializedviewApi.md#createView) | **POST** /materialized-view/create | Create view
*RakamClient.MaterializedviewApi* | [**deleteView**](docs/MaterializedviewApi.md#deleteView) | **POST** /materialized-view/delete | Delete materialized view
*RakamClient.MaterializedviewApi* | [**getSchemaOfView**](docs/MaterializedviewApi.md#getSchemaOfView) | **POST** /materialized-view/schema | Get schemas
*RakamClient.MaterializedviewApi* | [**getView**](docs/MaterializedviewApi.md#getView) | **POST** /materialized-view/get | Get view
*RakamClient.MaterializedviewApi* | [**listViews**](docs/MaterializedviewApi.md#listViews) | **POST** /materialized-view/list | List views
*RakamClient.QueryApi* | [**execute**](docs/QueryApi.md#execute) | **POST** /query/execute | Execute query on event data-set
*RakamClient.QueryApi* | [**explain**](docs/QueryApi.md#explain) | **POST** /query/explain | Explain query
*RakamClient.QueryApi* | [**metadata**](docs/QueryApi.md#metadata) | **POST** /query/metadata | Test query
*RakamClient.RealtimeApi* | [**createTable**](docs/RealtimeApi.md#createTable) | **POST** /realtime/create | Create report
*RakamClient.RealtimeApi* | [**deleteTable**](docs/RealtimeApi.md#deleteTable) | **POST** /realtime/delete | Delete report
*RakamClient.RealtimeApi* | [**listTables**](docs/RealtimeApi.md#listTables) | **POST** /realtime/list | List queries
*RakamClient.RealtimeApi* | [**queryTable**](docs/RealtimeApi.md#queryTable) | **POST** /realtime/get | Get report
*RakamClient.RecipeApi* | [**exportRecipe**](docs/RecipeApi.md#exportRecipe) | **GET** /recipe/export | Export recipe
*RakamClient.RecipeApi* | [**installRecipe**](docs/RecipeApi.md#installRecipe) | **POST** /recipe/install | Install recipe
*RakamClient.RetentionApi* | [**analyzeRetention**](docs/RetentionApi.md#analyzeRetention) | **POST** /retention/analyze | Execute query
*RakamClient.UserApi* | [**createSegment**](docs/UserApi.md#createSegment) | **POST** /user/create_segment | Get events of the user
*RakamClient.UserApi* | [**createUser**](docs/UserApi.md#createUser) | **POST** /user/create | Create new user
*RakamClient.UserApi* | [**createUsers**](docs/UserApi.md#createUsers) | **POST** /user/batch/create | Create multiple new users
*RakamClient.UserApi* | [**getEvents**](docs/UserApi.md#getEvents) | **POST** /user/get_events | Get events of the user
*RakamClient.UserApi* | [**getMetadata**](docs/UserApi.md#getMetadata) | **GET** /user/metadata | Get user storage metadata
*RakamClient.UserApi* | [**getUser**](docs/UserApi.md#getUser) | **POST** /user/get | Get user
*RakamClient.UserApi* | [**incrementProperty**](docs/UserApi.md#incrementProperty) | **POST** /user/increment_property | Set user property
*RakamClient.UserApi* | [**searchUsers**](docs/UserApi.md#searchUsers) | **POST** /user/search | Search users
*RakamClient.UserApi* | [**setProperties**](docs/UserApi.md#setProperties) | **POST** /user/set_properties | Set user properties
*RakamClient.UserApi* | [**setPropertiesOnce**](docs/UserApi.md#setPropertiesOnce) | **POST** /user/set_properties_once | Set user properties once
*RakamClient.UserApi* | [**unsetProperty**](docs/UserApi.md#unsetProperty) | **POST** /user/unset_properties | Unset user property
*RakamClient.UseractionApi* | [**batch**](docs/UseractionApi.md#batch) | **POST** /user/action/email/batch | Apply batch operation
*RakamClient.UseractionApi* | [**send**](docs/UseractionApi.md#send) | **POST** /user/action/email/single | Perform action for single user


## Documentation for Models

 - [RakamClient.AnalyzeRequest](docs/AnalyzeRequest.md)
 - [RakamClient.BulkEventRemote](docs/BulkEventRemote.md)
 - [RakamClient.CheckLockKey](docs/CheckLockKey.md)
 - [RakamClient.Collection](docs/Collection.md)
 - [RakamClient.CollectionDefinition](docs/CollectionDefinition.md)
 - [RakamClient.CollectionEvent](docs/CollectionEvent.md)
 - [RakamClient.CommitBulkEvents](docs/CommitBulkEvents.md)
 - [RakamClient.CommitRequest](docs/CommitRequest.md)
 - [RakamClient.Condition](docs/Condition.md)
 - [RakamClient.ConfigItem](docs/ConfigItem.md)
 - [RakamClient.ContinuousQuery](docs/ContinuousQuery.md)
 - [RakamClient.ContinuousQueryDeleteQuery](docs/ContinuousQueryDeleteQuery.md)
 - [RakamClient.ContinuousQueryGetQuery](docs/ContinuousQueryGetQuery.md)
 - [RakamClient.ContinuousQueryGetSchemaOfQuery](docs/ContinuousQueryGetSchemaOfQuery.md)
 - [RakamClient.ContinuousQueryTestQuery](docs/ContinuousQueryTestQuery.md)
 - [RakamClient.CreatePrecomputedTable](docs/CreatePrecomputedTable.md)
 - [RakamClient.CreateProject](docs/CreateProject.md)
 - [RakamClient.EmailActionConfig](docs/EmailActionConfig.md)
 - [RakamClient.ErrorMessage](docs/ErrorMessage.md)
 - [RakamClient.Event](docs/Event.md)
 - [RakamClient.EventContext](docs/EventContext.md)
 - [RakamClient.EventExplorerGetEventStatistics](docs/EventExplorerGetEventStatistics.md)
 - [RakamClient.EventFilter](docs/EventFilter.md)
 - [RakamClient.EventFilterAggregation](docs/EventFilterAggregation.md)
 - [RakamClient.EventList](docs/EventList.md)
 - [RakamClient.Execute](docs/Execute.md)
 - [RakamClient.Explain](docs/Explain.md)
 - [RakamClient.ExportQuery](docs/ExportQuery.md)
 - [RakamClient.FunnelQuery](docs/FunnelQuery.md)
 - [RakamClient.FunnelStep](docs/FunnelStep.md)
 - [RakamClient.FunnelWindow](docs/FunnelWindow.md)
 - [RakamClient.GroupBy](docs/GroupBy.md)
 - [RakamClient.Library](docs/Library.md)
 - [RakamClient.MappingPlugin](docs/MappingPlugin.md)
 - [RakamClient.MaterializedView](docs/MaterializedView.md)
 - [RakamClient.MaterializedViewDeleteView](docs/MaterializedViewDeleteView.md)
 - [RakamClient.MaterializedViewGetSchemaOfView](docs/MaterializedViewGetSchemaOfView.md)
 - [RakamClient.MaterializedViewGetView](docs/MaterializedViewGetView.md)
 - [RakamClient.MaterializedViewSchema](docs/MaterializedViewSchema.md)
 - [RakamClient.Measure](docs/Measure.md)
 - [RakamClient.MetadataResponse](docs/MetadataResponse.md)
 - [RakamClient.ModuleDescriptor](docs/ModuleDescriptor.md)
 - [RakamClient.OLAPTable](docs/OLAPTable.md)
 - [RakamClient.Ordering](docs/Ordering.md)
 - [RakamClient.PrecalculatedTable](docs/PrecalculatedTable.md)
 - [RakamClient.ProjectAddCustomFieldsToSchema](docs/ProjectAddCustomFieldsToSchema.md)
 - [RakamClient.ProjectAddFieldsToSchema](docs/ProjectAddFieldsToSchema.md)
 - [RakamClient.ProjectApiKeys](docs/ProjectApiKeys.md)
 - [RakamClient.ProjectCheckApiKeys](docs/ProjectCheckApiKeys.md)
 - [RakamClient.ProjectGetStats](docs/ProjectGetStats.md)
 - [RakamClient.ProjectSchema](docs/ProjectSchema.md)
 - [RakamClient.QueryError](docs/QueryError.md)
 - [RakamClient.QueryMetadata](docs/QueryMetadata.md)
 - [RakamClient.QueryResult](docs/QueryResult.md)
 - [RakamClient.RealTimeQueryResult](docs/RealTimeQueryResult.md)
 - [RakamClient.RealTimeReport](docs/RealTimeReport.md)
 - [RakamClient.RealtimeDeleteTable](docs/RealtimeDeleteTable.md)
 - [RakamClient.RealtimeQueryTable](docs/RealtimeQueryTable.md)
 - [RakamClient.Recipe](docs/Recipe.md)
 - [RakamClient.Reference](docs/Reference.md)
 - [RakamClient.ResponseQuery](docs/ResponseQuery.md)
 - [RakamClient.RetentionAction](docs/RetentionAction.md)
 - [RakamClient.RetentionQuery](docs/RetentionQuery.md)
 - [RakamClient.SchemaField](docs/SchemaField.md)
 - [RakamClient.SchemaFieldInfo](docs/SchemaFieldInfo.md)
 - [RakamClient.Sorting](docs/Sorting.md)
 - [RakamClient.Stats](docs/Stats.md)
 - [RakamClient.SuccessMessage](docs/SuccessMessage.md)
 - [RakamClient.Timeframe](docs/Timeframe.md)
 - [RakamClient.User](docs/User.md)
 - [RakamClient.UserContext](docs/UserContext.md)
 - [RakamClient.UserCreateSegment](docs/UserCreateSegment.md)
 - [RakamClient.UserCreateUsers](docs/UserCreateUsers.md)
 - [RakamClient.UserEmailActionBatch](docs/UserEmailActionBatch.md)
 - [RakamClient.UserEmailActionSend](docs/UserEmailActionSend.md)
 - [RakamClient.UserGetEvents](docs/UserGetEvents.md)
 - [RakamClient.UserGetUser](docs/UserGetUser.md)
 - [RakamClient.UserIncrementProperty](docs/UserIncrementProperty.md)
 - [RakamClient.UserSearchUsers](docs/UserSearchUsers.md)
 - [RakamClient.UserUnsetProperty](docs/UserUnsetProperty.md)


## Documentation for Authorization


### read_key

- **Type**: API key
- **API key parameter name**: read_key
- **Location**: HTTP header

### master_key

- **Type**: API key
- **API key parameter name**: master_key
- **Location**: HTTP header

### write_key

- **Type**: API key
- **API key parameter name**: write_key
- **Location**: HTTP header
