import React from 'react';

interface NewListProps<T> {
    items: T[],
    renderItem: (item: T) => React.ReactNode
}

export default function NewList<T>(props: NewListProps<T>) {
    return(
       <div>
        {props.items.map(props.renderItem)}
    </div>)
};