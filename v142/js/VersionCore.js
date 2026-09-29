
class VersionCore {
    static info = {"number": "142", "hash": "617AA7"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
