
class VersionCore {
    static info = {"number": "113", "hash": "0F52C2"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
