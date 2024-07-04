import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import NewArrivals from '@/components/NewArrivals'
import { getProductById } from '@/lib/stripe';
import Head from 'next/head'


export default async function Home() {
    const productIds = [
        process.env.STRIPE_PRODUCT_ID_1!,
        process.env.STRIPE_PRODUCT_ID_2!,
        process.env.STRIPE_PRODUCT_ID_3!,
        process.env.STRIPE_PRODUCT_ID_4!,
        process.env.STRIPE_PRODUCT_ID_5!,
        process.env.STRIPE_PRODUCT_ID_6!,
    ];

    if (productIds.some(id => !id)) {
        throw new Error('One or more STRIPE_PRODUCT_ID is not set in environment variables');
    }

    const productPromises = productIds.map(id => getProductById(id));
    const products = await Promise.all(productPromises);

    if (products.some(product => !product)) {
        return <div>One or more products are not found!</div>
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Unique Clothes Explorer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header />
                <HeroSection />
                <NewArrivals products={products} />
            </main>
        </div>
    )
}

