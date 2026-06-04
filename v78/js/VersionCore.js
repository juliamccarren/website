
class VersionCore {
    static info = {"number": "78", "hash": "11D34B"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
