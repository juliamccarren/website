try:
    import polars as pl
except ImportError:
    print("Error: polars library not installed. Install it with: pip install polars")
    exit(1)

# Beispiel-Daten für Kundenstammdaten
kunden_data = [
    {
        "kunde_id": 1001,
        "name": "Müller GmbH",
        "adresse": "Hauptstraße 12",
        "plz": "10115",
        "stadt": "Berlin",
        "land": "Deutschland",
        "email": "info@muellergmbh.de",
        "telefon": "+49 30 123456",
        "kundentyp": "B2B",
        "umsatz_kumuliert": 125000.75,
    },
    {
        "kunde_id": 1002,
        "name": "Schmidt KG",
        "adresse": "Bahnhofstraße 8",
        "plz": "80331",
        "stadt": "München",
        "land": "Deutschland",
        "email": "kontakt@schmidtkg.de",
        "telefon": "+49 89 987654",
        "kundentyp": "B2B",
        "umsatz_kumuliert": 98000.00,
    },
    {
        "kunde_id": 1003,
        "name": "Anna Becker",
        "adresse": "Lindenweg 4",
        "plz": "50667",
        "stadt": "Köln",
        "land": "Deutschland",
        "email": "anna.becker@example.com",
        "telefon": "+49 221 555123",
        "kundentyp": "Privat",
        "umsatz_kumuliert": 540.50,
    },
    {
        "kunde_id": 1004,
        "name": "TechSolutions AG",
        "adresse": "Innovationpark 3",
        "plz": "20095",
        "stadt": "Hamburg",
        "land": "Deutschland",
        "email": "sales@techsolutions.ag",
        "telefon": "+49 40 321789",
        "kundentyp": "B2B",
        "umsatz_kumuliert": 215000.00,
    },
]


kunden_df = pl.DataFrame(kunden_data)
kunden_df = kunden_df.filter(pl.col("stadt") == "Hamburg").select(["kunde_id", "name", "adresse", "stadt"]).rename({"kunde_id": "Kundennummer"})



kunden_df.write_csv(r"c:\temp\kunden.csv")


if __name__ == "__main__":
    print(kunden_df)
