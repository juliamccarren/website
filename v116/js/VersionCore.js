
class VersionCore {
    static info = {"number": "116", "hash": "22562C"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
