import os

# A second language, so the scanner's Python patterns get exercised too.
DATABASE_URL = os.environ["DATABASE_URL"]
LOG_LEVEL = os.getenv("LOG_LEVEL", "info")

if __name__ == "__main__":
    print(f"would back up {DATABASE_URL.split('@')[-1]} at level {LOG_LEVEL}")
