
class VersionCore {
    static info = {"number": "125", "hash": "D12B9D"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
