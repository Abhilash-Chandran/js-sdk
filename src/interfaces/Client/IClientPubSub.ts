export default interface IClientPubSub {
    publish(pubSubName: string, topic: string, data?: object): Promise<void>
}