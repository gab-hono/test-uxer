// src/pages/Test.tsx

import Button from "../components/Button/Button"
import ButtonGroup from "../components/Button/ButtonGroup"
import { Link } from "react-router-dom"
import { CheckIcon, TrashIcon, SlidersHorizontalIcon, GearSixIcon } from "@phosphor-icons/react/dist/ssr"

export default function Test() {
    return (
        <main>
            <nav aria-label="Navigation">
                <Link to="/">
                    <Button variant="ghost" size="m">
                        Retour
                    </Button>
                </Link>
            </nav>

            <h1>Test des boutons</h1>
            <p>
                Cette page affiche les différentes variantes des boutons issus du fichier Figma.
                Par défaut les boutons sont affichés avec deux icônes.
                Pour tester d'autres configurations, modifier les props directement dans <code>Test.tsx</code>.
            </p>

            <section aria-labelledby="standards-titre">
                <h2 id="standards-titre">Boutons standards</h2>

                <h3>Primaire</h3>
                <Button
                    variant="primary"
                    size="m"
                    leadingIcon={<SlidersHorizontalIcon />}
                    trailingIcon={<CheckIcon />}
                    badge={5}
                >
                    Button
                </Button>
                <Button
                    variant="primary"
                    size="m"
                    leadingIcon={<SlidersHorizontalIcon />}
                    trailingIcon={<CheckIcon />}
                    badge={30}
                    disabled
                    aria-disabled="true"
                >
                    Button
                </Button>

                <h3>Secondaire</h3>
                <Button
                    variant="secondary"
                    size="m"
                    leadingIcon={<SlidersHorizontalIcon />}
                    trailingIcon={<CheckIcon />}
                    badge={400}
                >
                    Button
                </Button>
                <Button
                    variant="secondary"
                    size="m"
                    leadingIcon={<SlidersHorizontalIcon />}
                    trailingIcon={<CheckIcon />}
                    badge={3}
                    disabled
                >
                    Button
                </Button>

                <h3>Ghost</h3>
                <Button
                    variant="ghost"
                    size="m"
                    leadingIcon={<SlidersHorizontalIcon />}
                    trailingIcon={<CheckIcon />}
                    badge={3}
                >
                    Button
                </Button>
                <Button
                    variant="ghost"
                    size="m"
                    leadingIcon={<SlidersHorizontalIcon />}
                    trailingIcon={<CheckIcon />}
                    badge={3}
                    disabled
                >
                    Button
                </Button>

                <h3>Destructive</h3>
                <Button
                    variant="destructive"
                    size="m"
                    leadingIcon={<TrashIcon />}
                    trailingIcon={<CheckIcon />}
                    badge={3}
                >
                    Button
                </Button>
                <Button
                    variant="destructive"
                    size="m"
                    leadingIcon={<TrashIcon />}
                    trailingIcon={<CheckIcon />}
                    badge={3}
                    disabled
                >
                    Button
                </Button>
            </section>

            <section aria-labelledby="groupes-titre">
                <h2 id="groupes-titre">Boutons en groupe</h2>

                <h3>Primaire</h3>
                <div style={{ padding: "16px", borderRadius: "8px", display: "inline-flex", gap: "8px" }}>
                <ButtonGroup
                    variant="primary"
                    size="m"
                    leadingIcon={<SlidersHorizontalIcon />}
                    addonIcon={<GearSixIcon />}
                    badge={3}
                >
                    Button
                </ButtonGroup>
                <ButtonGroup
                    variant="primary"
                    size="m"
                    leadingIcon={<SlidersHorizontalIcon />}
                    addonIcon={<GearSixIcon />}
                    badge={3}
                    disabled
                >
                    Button
                </ButtonGroup>
                </div>

                <h3>Secondaire</h3>
                <div style={{ padding: "16px", borderRadius: "8px", display: "inline-flex", gap: "8px" }}>
                <ButtonGroup
                    variant="secondary"
                    size="m"
                    leadingIcon={<SlidersHorizontalIcon />}
                    addonIcon={<GearSixIcon />}
                    badge={3}
                >
                    Button
                </ButtonGroup>
                <ButtonGroup
                    variant="secondary"
                    size="m"
                    leadingIcon={<SlidersHorizontalIcon />}
                    addonIcon={<GearSixIcon />}
                    badge={3}
                    disabled
                >
                    Button
                </ButtonGroup>
                </div>

                <h3>Destructive</h3>
                <div style={{ padding: "16px", borderRadius: "8px", display: "inline-flex", gap: "8px" }}>
                <ButtonGroup
                    variant="destructive"
                    size="m"
                    leadingIcon={<TrashIcon />}
                    addonIcon={<GearSixIcon />}
                    badge={3}
                >
                    Button
                </ButtonGroup>
                <ButtonGroup
                    variant="destructive"
                    size="m"
                    leadingIcon={<TrashIcon />}
                    addonIcon={<GearSixIcon />}
                    badge={3}
                    disabled
                >
                    Button
                </ButtonGroup>
                </div>
            </section>

            <section aria-labelledby="icononly-titre">
                <h2 id="icononly-titre">Icon Only</h2>

                <h3>Primaire</h3>
                <div style={{ padding: "16px", borderRadius: "8px", display: "inline-flex", gap: "8px" }}>
                <Button
                    variant="primary"
                    iconOnly
                    leadingIcon={<GearSixIcon />}
                />
                <Button
                    variant="primary"
                    iconOnly
                    leadingIcon={<GearSixIcon />}
                    disabled
                />
                </div>

                <h3>Secondaire</h3>
                <div style={{ padding: "16px", borderRadius: "8px", display: "inline-flex", gap: "8px" }}>
                <Button
                    variant="secondary"
                    iconOnly
                    leadingIcon={<GearSixIcon />}
                />
                <Button
                    variant="secondary"
                    iconOnly
                    leadingIcon={<GearSixIcon />}
                    disabled
                />
                </div>

                <h3>Alpha Dark</h3>
                <div style={{ padding: "16px", borderRadius: "8px", display: "inline-flex", gap: "8px" }}>
                <Button
                    variant="alpha-dark"
                    iconOnly
                    leadingIcon={<GearSixIcon />}
                />
                <Button
                    variant="alpha-dark"
                    iconOnly
                    leadingIcon={<GearSixIcon />}
                    disabled
                />
                </div>

                <h3>Alpha Light</h3>
                <div style={{ backgroundColor: "#171717", padding: "16px", borderRadius: "8px", display: "inline-flex", gap: "8px" }}>
                <Button
                    variant="alpha-light"
                    iconOnly
                    leadingIcon={<GearSixIcon />}
                />
                <Button
                    variant="alpha-light"
                    iconOnly
                    leadingIcon={<GearSixIcon />}
                    disabled
                />
                </div>
            </section>
        </main>
    )
}