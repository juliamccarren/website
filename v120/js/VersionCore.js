
class VersionCore {
    static info = {"number": "120", "hash": "530486"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
