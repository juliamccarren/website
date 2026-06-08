
class VersionCore {
    static info = {"number": "85", "hash": "3ADE5C"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
