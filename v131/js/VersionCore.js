
class VersionCore {
    static info = {"number": "131", "hash": "78BD54"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
