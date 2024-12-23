<script setup lang="ts">

const slider = ['/images/fit-1.png', '/images/fit-2.png', '/images/fit-3.png', '/images/fit-4.png', '/images/fit-5.png']
</script>
<template>
  <div id="app">
    <div class="fit-slider">
      <Carousel :value="slider" :numVisible="1" :numScroll="1" :showNavigators="false" circular
                :autoplayInterval="3000">
        <template #item="slotProps">
          <div class="fit-slider__img">
            <img class="fit-slider__img" :src="slotProps.data" alt="fit">

          </div>
        </template>
      </Carousel>
    </div>
    <div class="wrapper">
      <div class="fit">
        <div class="fit-images">
          <div class="fit-images-1">
            <img src="/images/fit-1.png" alt="fit">
            <img src="/images/fit-2.png" alt="fit">
          </div>
          <div class="fit-images-2">
            <img src="/images/fit-3.png" alt="fit">
            <img src="/images/fit-4.png" alt="fit">
            <img src="/images/fit-5.png" alt="fit">
          </div>
          <span class="fit-images-text">watch in 3D</span>
        </div>
        <div class="fit-info">
          <div class="fit-info-top">
            <h1 class="fit-title">Sneakerhead</h1>
            <p class="fit-desc">774 Core low-top sneakers</p>
          </div>
          <div class="fit-info-price">
            <h1 class="fit-price">£179</h1>
            <p class="fit-price-text">Import duties included</p>
          </div>
          <div class="line"></div>
        </div>
      </div>

      <div class="fit-tab">
        <Tabs value="0">
          <TabList>
            <Tab value="0">THE DETAILS</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="fit-tab__inner">
                <div class="fit-tab__inner-item">
                  <div class="fit-info-top">
                    <h2 class="fit-title">Sneakerhead</h2>
                    <p class="fit-desc">774 Core low-top sneakers</p>
                  </div>
                  <div class="fit-tab__desc">
                    Boasting a versatile design, the Sneakerhead 774 Core low-top sneakers features an all-grey premium
                    leather construction. This pair is enhanced with the brand’s famous «super» logo on the sides and
                    sit atop midsole and rubber outsole for better cushion and traction.
                  </div>
                </div>
                <div class="fit-tab__inner-item">
                  <div class="fit-tab__info">
                    <h3 class="fit-tab__info-title"> Composition </h3>
                    <p class="fit-tab__info-desc">Outer: Suede 100%, Mesh 100% </p>
                    <p class="fit-tab__info-desc">Sole: Rubber 100% </p>
                    <p class="fit-tab__info-desc"> Lining: Fabric 100%</p>
                  </div>
                  <div class="fit-tab__info">
                    <h3 class="fit-tab__info-title"> Product IDs </h3>
                    <p class="fit-tab__info-desc"> FETCH ID: 20245867</p>
                    <p class="fit-tab__info-desc">Brand style ID: WL774EVG </p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div class="fit-accordion">
        <Accordion value="0">
          <AccordionPanel value="0">
            <AccordionHeader>THE DETAILS</AccordionHeader>
            <AccordionContent>
              <div class="fit-tab__inner">
                <div class="fit-tab__inner-item">
                  <div class="fit-info-top">
                    <h2 class="fit-title">Sneakerhead</h2>
                    <p class="fit-desc">774 Core low-top sneakers</p>
                  </div>
                  <div class="fit-tab__desc">
                    Boasting a versatile design, the Sneakerhead 774 Core low-top sneakers features an all-grey premium
                    leather construction. This pair is enhanced with the brand’s famous «super» logo on the sides and
                    sit atop midsole and rubber outsole for better cushion and traction.
                  </div>
                </div>
                <div class="fit-tab__inner-item">
                  <div class="fit-tab__info">
                    <h3 class="fit-tab__info-title"> Composition </h3>
                    <p class="fit-tab__info-desc">Outer: Suede 100%, Mesh 100% </p>
                    <p class="fit-tab__info-desc">Sole: Rubber 100% </p>
                    <p class="fit-tab__info-desc"> Lining: Fabric 100%</p>
                  </div>
                  <div class="fit-tab__info">
                    <h3 class="fit-tab__info-title"> Product IDs </h3>
                    <p class="fit-tab__info-desc"> FETCH ID: 20245867</p>
                    <p class="fit-tab__info-desc">Brand style ID: WL774EVG </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  </div>
</template>
