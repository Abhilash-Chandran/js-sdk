import GRPCServer from "./GRPCServer";
import { TypeDaprPubSubCallback } from "../../../types/DaprPubSubCallback.type";
import IServerPubSub from "../../../interfaces/Server/IServerPubSub";
import GRPCClient from "../../Client/GRPCClient/GRPCClient";

// https://docs.dapr.io/reference/api/pubsub_api/
export default class DaprPubSub implements IServerPubSub {
  server: GRPCServer;
  client: GRPCClient;

  constructor(server: GRPCServer, client: GRPCClient) {
      this.server = server;
      this.client = client;
  }
  
  async subscribe(pubSubName: string, topic: string, cb: TypeDaprPubSubCallback): Promise<void> {
    console.log(`Registering onTopicEvent Handler: PubSub = ${pubSubName}; Topic = ${topic}`);
    this.server.getServerImpl().registerPubSubSubscriptionHandler(pubSubName, topic, cb);
  }
}
