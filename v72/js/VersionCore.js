
class VersionCore {
    static info = {"number": "72", "hash": "51F80F"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
