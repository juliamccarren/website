
class VersionCore {
    static info = {"number": "148", "hash": "98A9C3"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
