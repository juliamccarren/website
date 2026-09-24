
class VersionCore {
    static info = {"number": "137", "hash": "D15CC2"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
