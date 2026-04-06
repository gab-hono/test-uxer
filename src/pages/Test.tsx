// src/pages/Test.tsx

import Button from "../components/Button/Button"
import ButtonGroup from "../components/Button/ButtonGroup"
import { CheckIcon } from "../components/Icons/CheckIcon"
import { FilterIcon } from "../components/Icons/FilterIcon"
import { SettingsIcon } from "../components/Icons/SettingsIcon"
import { TrashIcon } from "../components/Icons/TrashIcon"
import { Link } from "react-router-dom"

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
                    leadingIcon={<FilterIcon />}
                    trailingIcon={<CheckIcon />}
                    badge={3}
                >
                    Button
                </Button>
                <Button
                    variant="primary"
                    size="m"
                    leadingIcon={<FilterIcon />}
                    trailingIcon={<CheckIcon />}
                    badge={3}
                    disabled
                    aria-disabled="true"
                >
                    Button
                </Button>

                <h3>Secondaire</h3>
                <Button
                    variant="secondary"
                    size="m"
                    leadingIcon={<FilterIcon />}
                    trailingIcon={<CheckIcon />}
                    badge={3}
                >
                    Button
                </Button>
                <Button
                    variant="secondary"
                    size="m"
                    leadingIcon={<FilterIcon />}
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
                    leadingIcon={<FilterIcon />}
                    trailingIcon={<CheckIcon />}
                    badge={3}
                >
                    Button
                </Button>
                <Button
                    variant="ghost"
                    size="m"
                    leadingIcon={<FilterIcon />}
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
                <ButtonGroup
                    variant="primary"
                    size="m"
                    leadingIcon={<FilterIcon />}
                    addonIcon={<SettingsIcon />}
                    badge={3}
                >
                    Button
                </ButtonGroup>
                <ButtonGroup
                    variant="primary"
                    size="m"
                    leadingIcon={<FilterIcon />}
                    addonIcon={<SettingsIcon />}
                    badge={3}
                    disabled
                >
                    Button
                </ButtonGroup>

                <h3>Secondaire</h3>
                <ButtonGroup
                    variant="secondary"
                    size="m"
                    leadingIcon={<FilterIcon />}
                    addonIcon={<SettingsIcon />}
                    badge={3}
                >
                    Button
                </ButtonGroup>
                <ButtonGroup
                    variant="secondary"
                    size="m"
                    leadingIcon={<FilterIcon />}
                    addonIcon={<SettingsIcon />}
                    badge={3}
                    disabled
                >
                    Button
                </ButtonGroup>

                <h3>Destructive</h3>
                <ButtonGroup
                    variant="destructive"
                    size="m"
                    leadingIcon={<TrashIcon />}
                    addonIcon={<SettingsIcon />}
                    badge={3}
                >
                    Button
                </ButtonGroup>
                <ButtonGroup
                    variant="destructive"
                    size="m"
                    leadingIcon={<TrashIcon />}
                    addonIcon={<SettingsIcon />}
                    badge={3}
                    disabled
                >
                    Button
                </ButtonGroup>
            </section>

            <section aria-labelledby="icononly-titre">
                <h2 id="icononly-titre">Icon Only</h2>

                <h3>Primaire</h3>
                <Button
                    variant="primary"
                    iconOnly
                    leadingIcon={<SettingsIcon />}
                />
                <Button
                    variant="primary"
                    iconOnly
                    leadingIcon={<SettingsIcon />}
                    disabled
                />

                <h3>Secondaire</h3>
                <Button
                    variant="secondary"
                    iconOnly
                    leadingIcon={<SettingsIcon />}
                />
                <Button
                    variant="secondary"
                    iconOnly
                    leadingIcon={<SettingsIcon />}
                    disabled
                />

                <h3>Alpha Dark</h3>
                <Button
                    variant="alpha-dark"
                    iconOnly
                    leadingIcon={<SettingsIcon />}
                />
                <Button
                    variant="alpha-dark"
                    iconOnly
                    leadingIcon={<SettingsIcon />}
                    disabled
                />

                <h3>Alpha Light</h3>
                <Button
                    variant="alpha-light"
                    iconOnly
                    leadingIcon={<SettingsIcon />}
                />
                <Button
                    variant="alpha-light"
                    iconOnly
                    leadingIcon={<SettingsIcon />}
                    disabled
                />
            </section>
        </main>
    )
}