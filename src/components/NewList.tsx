import React from 'react';

interface NewListProps<T> {
    items: T[],
    component: (item: T) => React.ReactNode
}

export default function NewList<T>(props: NewListProps<T>) {

};