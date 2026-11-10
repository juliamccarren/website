
class VersionCore {
    static info = {"number": "155", "hash": "97E1D5"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
