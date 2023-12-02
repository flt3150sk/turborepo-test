import { Card } from "@repo/ui/card";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Card
        className={styles.card}
        href="https://turbo.build/repo/docs"
        title={process.env.NEXT_PUBLIC_TEST_VAR ?? "Not Found"}
      >
        Find in-depth information about Turborepo features and API.
      </Card>
    </main>
  );
}
