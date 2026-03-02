
class VersionCore {
    static info = {"number": "31", "hash": "82EE85"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
