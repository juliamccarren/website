
class VersionCore {
    static info = {"number": "55", "hash": "5DF97A"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
