"use client";

import Image from "next/image";
import styles from "./essay.module.css";
import localFont from "next/font/local";

const universCn = localFont({
  src: "../../public/fonts/UniversLTStd-Cn.woff",
  variable: "--font-univers-cn",
});

const universObl = localFont({
  src: "../../public/fonts/UniversLTStd-Obl.woff",
  variable: "--font-univers-obl",
});

const univers = localFont({
  src: "../../public/fonts/UniversLTStd.woff",
  variable: "--font-univers",
});

export default function EssayPage() {
  return (
    <div
      className={`${styles.container} ${universCn.variable} ${universObl.variable} ${univers.variable}`}
    >
      <article className={styles.article}>
        <div className={styles.titleSection}>
          <div className={styles.titleBackground}>
            <Image
              src="/essay/foam-intro.svg"
              alt="Foam pattern background"
              fill
              priority
              className={styles.foamBackground}
            />
          </div>
          <div className={styles.titleContent}>
            <Image
              src="/essay/tree-of-knowledge.svg"
              alt="The Tree of Knowledge"
              width={600}
              height={200}
              priority
              className={styles.titleImage}
            />
            <p className={styles.author}>An Essay by Dr. Michael Whittle</p>
          </div>
        </div>

        <section>
          <h2>INTRODUCTION: THE LABRYNTH OF LEARNING</h2>
          <blockquote>
            &ldquo;The general system of the sciences and the arts is a sort of
            labyrinth, a tortuous road which the intellect enters without quite
            knowing what direction to take...&rdquo;
          </blockquote>
          <p className={styles.attribution}>D&apos;Alembert (1751)</p>

          <p>
            The rate of new knowledge production has reached unprecedented
            levels. Current estimates suggest that up to 2 million academic
            papers are published annually across more than 30,000 specialized
            journals covering a vast array of fields. With the emergence of AI
            and machine learning technologies accelerating research
            capabilities, we can expect these numbers to increase exponentially.
          </p>

          <p>
            New subjects continuously emerge from established disciplines. The
            growth of cross-, inter-, and transdisciplinary research has spawned
            innovative fields such as Bioinformatics (biology + computer
            science), Quantum computing (quantum physics + computer science),
            Neuroaesthetics (neuroscience + art theory), and Computational
            creativity (computer science + cognitive science + creative
            domains).
          </p>

          <p>
            This explosive growth and diversification of knowledge poses
            significant challenges for organization and comprehension. Our
            visualization project addresses these challenges by creating a
            comprehensive overview of current major disciplines and
            subdisciplines researched, taught, and studied at University. The
            interactive design allows viewers to explore this knowledge
            landscape through digital devices, offering multiple pathways
            through the academic terrain.
          </p>

          <p>
            To contextualize our approach, it&apos;s valuable to examine
            historical attempts at structuring human knowledge. Throughout
            history, scholars have devised various systems to categorize and
            relate fields of study, often visualized as &apos;trees of
            knowledge&apos;. From the classical era, when individuals like
            Aristotle and Hypatia were said to have mastered most known fields,
            to our current age where artificial intelligence systems process
            vast databases of human knowledge, these organizational systems
            reveal our evolving understanding of knowledge itself.
          </p>

          <blockquote>
            &ldquo;The distributions and partitions of knowledge are not like
            several lines that meet at one angle, and so touch but in a point;
            but are like branches of a tree, that meet in a stem, which have a
            dimension and quantity of entireness and continuance, before it
            comes to discontinue and break itself into arms and boughs.&rdquo;
          </blockquote>
          <p className={styles.attribution}>Francis Bacon (1884)</p>
        </section>

        <section>
          <h2>Porphyry&apos;s Tree (3rd century AD)</h2>
          <p>
            Porphyry&apos;s Tree stands as one of the earliest attempts to
            systematically categorize knowledge. This hierarchical structure,
            introduced by the Neoplatonist philosopher Porphyry, aimed to
            classify substances from the most general to the most specific,
            using a system of binary divisions.
          </p>
          <p>
            The influence of Porphyry&apos;s Tree extended far beyond its time,
            shaping philosophical thought and logical reasoning for centuries.
            Its method of dividing concepts into increasingly specific
            subcategories laid the groundwork for future classification systems
            and played a crucial role in the development of Western
            philosophical tradition.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/essay/01_porphyry.png"
              alt="Porphyrian tree diagram"
              width={433}
              height={600}
              priority
            />
            <figcaption>
              Porphyrian tree from fol. 7v of LJS 457 Loyca parva ... etc.
              Paolo, Veneto, (c.1370-1428) and Pergola, Paolo della, (d. 1455).
            </figcaption>
          </div>
        </section>

        <section>
          <h2>The Tree of Science (13th century)</h2>
          <p>
            In the 13th century, Majorcan polymath Ramon Llull presented his
            Tree of Science, an ambitious attempt to unify all known fields of
            study into a comprehensive system. Llull&apos;s work reflected the
            medieval desire for universal understanding, seeking to create a
            method that could generate all possible knowledge.
          </p>
          <p>
            Llull&apos;s tree structure was more complex than its predecessors,
            incorporating multiple levels and branches to represent different
            domains of knowledge. This innovative approach not only organized
            existing information but also proposed a method for discovering new
            knowledge, foreshadowing later developments in logic and computer
            science.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/essay/02_llull.png"
              alt="Tree of Science by Ramon Llull"
              width={464}
              height={600}
            />
            <figcaption>
              Image from a 1505 edition of Arbre de ciència by Ramon Llull
              (c.1232-1316). Printed in Barcelona, Houghton Library, Harvard
              University.
            </figcaption>
          </div>
        </section>

        <section>
          <h2>
            Diderot and d&apos;Alembert&apos;s Tree of Knowledge (18th century)
          </h2>
          <p>
            The Encyclopédie, a monumental work of the 18th century
            Enlightenment led by Diderot and d&apos;Alembert, marked a pivotal
            shift in knowledge representation. As Umberto Eco argues, this work
            signaled a transition from the traditional &apos;tree&apos;
            structure of knowledge to a more complex &apos;labyrinth&apos;
            model. Its innovative cross-referencing system created a web of
            interconnections that defied simple hierarchical organization.
          </p>
          <p>
            This labyrinthine structure not only reflected the
            Enlightenment&apos;s belief in reason but also challenged the notion
            of a single, authoritative path through knowledge. By allowing
            multiple routes of exploration, the Encyclopédie became more than a
            repository; it emerged as a tool for social and political change,
            embodying Eco&apos;s concept of knowledge as a network of
            possibilities rather than a fixed hierarchy.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/essay/03_diderot.png"
              alt="Diderot's Tree of Knowledge"
              width={684}
              height={600}
            />
            <figcaption>
              Tree of Porphyry from Henry Stanislas Nowlan&apos;s Rationalis
              philosophia, 1756, Palazzo Falson Historic House Museum.
            </figcaption>
          </div>
        </section>

        <section>
          <h2>The Dewey Decimal System (19th century)</h2>
          <p>
            The Dewey Decimal System, developed by Melvil Dewey in the 19th
            century, revolutionized library science with its practical approach
            to organizing and accessing information. This system divided
            knowledge into ten main classes, each further subdivided, allowing
            for precise categorization of books and efficient retrieval of
            information.
          </p>
          <p>
            The impact of the Dewey Decimal System extends far beyond its
            original context. Its principles have influenced numerous other
            classification systems and continue to shape how we organize and
            access information in the digital age, demonstrating the enduring
            relevance of structured knowledge organization.
          </p>
        </section>

        <section>
          <h2>The Foam of Knowledge (21st century)</h2>
          <blockquote>
            &ldquo;The guiding morphological principle of the polyspheric world
            we inhabit is no longer the orb, but rather the symbol of foam. The
            structural implication of the current earth-encompassing
            network-with all its eversions into the virtual realm-is thus not so
            much a globalization as a foaming.&rdquo;
          </blockquote>
          <p className={styles.attribution}>Peter Sloterdijk (2011)</p>

          <p>
            Peter Sloterdijk, a contemporary German philosopher, introduced his
            revolutionary concept of knowledge organization in his
            &apos;Spheres&apos; trilogy. Departing from traditional hierarchical
            models, Sloterdijk proposed a &apos;foam&apos; metaphor to describe
            the structure of modern society and, by extension, the organization
            of knowledge. This concept envisions interconnected bubbles, each
            representing a sphere of understanding or experience, coexisting and
            influencing one another as part of a dynamic system.
          </p>

          <p>
            Our visualization embodies this foam-like structure, presenting
            knowledge as an interconnected network rather than a rigid
            hierarchy. Each discipline appears as a bubble, with subdisciplines
            forming smaller, adjacent bubbles. The design reflects
            Sloterdijk&apos;s ideas of co-fragility and multiplicity, where each
            area of knowledge is both distinct and intimately connected to
            others. Users can explore these connections through interactive
            features, revealing the complex relationships between different
            fields of study.
          </p>

          <p>
            Looking ahead, this visualization serves as a snap-shot of our
            current emerging fields, and the evolving relationships between
            disciplines. As AI and other technologies continue to reshape the
            landscape of knowledge production and organization, such dynamic
            visualization systems will become increasingly valuable tools for
            understanding and navigating our expanding intellectual universe.
          </p>

          <blockquote>
            &ldquo;We live on an island surrounded by a sea of ignorance. As our
            island of knowledge grows, so does the shore of our
            ignorance.&rdquo;
          </blockquote>
          <p className={styles.attribution}>John Archibald Wheeler (1992)</p>
        </section>
      </article>
    </div>
  );
}
