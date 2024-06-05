<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;
use Illuminate\Support\Arr;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Product::class;
    public function definition(): array
    {
        //$categories = Category::all();
        $categories = Category::pluck('id')->toArray();
        return [
            'name' => $this->faker->name(),
            'description' => $this->faker->sentence(),
            'category_id'=>Arr::random($categories),
            //'category_id'=>Arr::random($categories)->id,
            'price'=>$this->faker->randomFloat(2,0,1000)
        ];
    }
}