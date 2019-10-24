    <main class="ca cr cr_landing">

        <section class="hero block">
            <a href="cr_browse.php">
                <div class="img-wrapper no-opacity-hover no-padding cover"><?php print caGetThemeGraphic("cr_landing_0".rand(1,3).".jpg"); ?></div>
                <div class="overlay">
                    <div class="inner">
                        <h1 class="headline-l">Isamu Noguchi Catalogue Raisonné</h1>
                        <?php print caNavLink("Enter", "button white wide", "", "Browse", "CR", array('facet' => 'has_media_facet', 'id' => 1)); ?>
                    </div>
                </div>
            </a>
        </section>

        <section class="wrap block">
            <div class="wrap-text text-align-center body-text-l">The Isamu Noguchi Catalogue Raisonné is an ongoing project of The Isamu Noguchi Foundation and Garden Museum, New York, committed to documenting the artistic practice of Isamu Noguchi (1904–1988).</div>
        </section>

    </main>