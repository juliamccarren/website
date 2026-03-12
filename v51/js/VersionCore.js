
class VersionCore {
    static info = {"number": "51", "hash": "11E7E6"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
