# Assignment report

## Design of the big data platform

Time series analytics of IoT sensor data made up of air quality measurements. Data is processed as JSON documents according to document-oriented model.
This type of data is easy and efficient to store in a NOSQL database, so the technology chosen for mysimbdp-coredms is MongoDB. MongoDB is very easy to deploy and scale while also working really well with JSON data. Especially when we have a lot of small sensors that differ slightly, it is easier to store them according document-oriented model than using a relational database with a very strict schema.
Time series analytics could also be done using different NOSQL Databases, Relational Databases like Cassandra and CockroachDB or Time Series Databases specifically designed for time series data.
Data source is sensors measuring air quality and the data is collected from an API that sends the data as JSON or CSV types.

### Components
- mysimbdp-coredms: Store and manage data, platform-as-a-services (PaaS), MongoDB. Shared or dedicated instances for tenants.

- mysimbdp-daas: Api call handler for API calls from mysimbdp-coredms, platform-as-a-services (PaaS). Shared or dedicated instances for tenants.

- mysimbdp-dataingest: Data ingestion from data sources of tenants/customers to mysimbdp-coredms trough API calls.

mysimbdp-coredms (MongoDB) has 3 cluster for nodes, which is the minimum amount needed to ensure that the system won't fail.

Data replication is set to 3, because this prevents the loss of data due to single point of failure, while being efficient enough to not require too many resources to run or waste. Redundancy is achieved by storing customer data replicated in 3 nodes. MongoDB has an replication feature.

mysimbdp-dataingest is deployed to ??? so tenants can push data into mysimbdp through mysimbdp-dataingest. Data ingestion is done with MQTT and other tools (maybe Kafka). The technology for MQTT is RabbitMQTT due to familiarity with it and general popularity of the technology when dealing with IoT data.


## Implementation

Tenant data is stored as JSON documents in mysimbdp-coredms according to the document-oriented database model.

Data will be sharded as groups of sensor, that are divided into subgroups by their partitioning attributes (location maybe). (MongoDB's sharding feature with hashed shard keys or range)
This is to ensure faster analysis of areas needed instead of having to look up all individual sensors when analysing the stored data.
