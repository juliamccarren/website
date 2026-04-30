
class VersionCore {
    static info = {"number": "69", "hash": "F997AE"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
